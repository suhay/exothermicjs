import path from 'path'
import fs from 'fs'
import yaml from 'js-yaml'
import React from 'react'
import ReactServer from 'react-dom/server'
import { StaticRouter } from 'react-router'

import { pageState, schemaState, configState } from './state'
import Head from './components/head'
import Base from './components/base'
import { isBrowser } from './components/util'

let Dashboard = null
let dashboardConfig = null

export const configBuilder = () => {
  if (configState.state.config) {
    return configState.state.config
  }
  const base = JSON.parse(fs.readFileSync(path.resolve(`${__dirname}/../exothermic.config.json`), `utf8`))
  let user = {}
  if (fs.existsSync(`exothermic.config.json`)) {
    user = JSON.parse(fs.readFileSync(path.resolve(`exothermic.config.json`), `utf8`))
  }
  const config = {
    ...base,
    ...user,
  }

  configState.setState(config)
  return config
}

export const get = (route, options) => {
  try {
    const { pages } = options
    const baseTemplate = fs.existsSync(path.resolve(`${pages[0]}/base.exo`))
      ? fs.readFileSync(path.resolve(`${pages[0]}/base.exo`), `utf8`)
      : fs.readFileSync(path.resolve(`${pages[1]}/base.exo`), `utf8`)
    const pageTemplate = fs.readFileSync(route, `utf8`)

    return [baseTemplate, pageTemplate]
  } catch (e) {
    console.error(e)
    throw new Error(e)
  }
}

export const render = (route, options) => {
  const { pages, dashboard, test } = options
  const templates = get(route, options)
  const base = yaml.safeLoad(templates[0])
  if (dashboard && !Dashboard) {
    try {
      const dash = require(`./dashboard`)
      Dashboard = dash.load()
      dashboardConfig = dash.config()
    } catch (e) {
      console.error(e)
    }
  }

  const page = yaml.safeLoad(templates[1], {
    schema: dashboard && Dashboard
      ? Dashboard.Schema()
      : schemaState.state.schema(),
  })
  const result = { ...base, ...page }
  const context = {}

  pageState.setState({ pagesPath: pages[0] })

  let markup = ReactServer.renderToString(
    dashboard && Dashboard
      ? (
        <StaticRouter location={route} context={context}>
          <Dashboard.OffCanvasContainer>
            <Base data={result} browser={test ? false : isBrowser()} />
          </Dashboard.OffCanvasContainer>
        </StaticRouter>
      )
      : (
        <StaticRouter location={route} context={context}>
          <Base data={result} browser={test ? false : isBrowser()} />
        </StaticRouter>
      ),
  )

  Object.keys(options).forEach((key) => {
    if (options[key] !== Object(options[key])) {
      markup = markup.replace(`{{${key}}}`, options[key])
    }
  })

  const head = ReactServer.renderToString(
    <Head data={result} />
  )

  const devScripts = `
<script src="/browser.js"></script>
<script src="/vendors.browser.js"></script>
`

  // ${configBuilder().plugins.map(conf => `<script src="/${conf}.min.js" />`)}


  const prodScripts = `
<script src="https://unpkg.com/exothermicjs/dist/browser.exothermic.min.js"></script>
  `

  const footerScripts = `
    ${process.env.SSR_ONLY === `true` || options.ssr_only
    ? ``
    : process.env.NODE_ENV && process.env.NODE_ENV === `development`
      ? devScripts
      : prodScripts}
    ${dashboard && dashboardConfig
    ? `<script src="${process.env.NODE_ENV && process.env.NODE_ENV === `development` ? dashboardConfig.dev : dashboardConfig.live}"></script>`
    : ``}
    <script>
      var config = {
        dashboard: ${dashboard ? `'endo'` : null}
      };
      EXOTHERMIC.initialize(config);
    </script>
  `

  return `
    <!doctype html>
    <html lang="en">
      <head>${head}</head>
      <body>
        <div id="__exothermic">${markup}</div>
        ${footerScripts}
      </body>
    </html>
  `
}

export const hydrate = (route, options) => {
  let markup = fs.readFileSync(route, `utf8`)
  Object.keys(options).forEach((key) => {
    if (options[key] !== Object(options[key])) {
      markup = markup.replace(`{{${key}}}`, options[key])
    }
  })
  return markup
}
