import path from 'path'
import fs from 'fs'
import yaml from 'js-yaml'
import React from 'react'
import { getGlobal } from 'reactn'
import ReactServer from 'react-dom/server'
import { Base64 } from 'js-base64'
import { StyleSheetServer } from 'aphrodite'

import Head from './components/head'
import Base from './components/base'
import configBuilder from './config'
import schema from './schema'

export const get = (route, options) => {
  try {
    const [userPages, defaultPages] = options.pages
    const baseTemplate = fs.existsSync(path.resolve(`${userPages}/base.exo`))
      ? fs.readFileSync(path.resolve(`${userPages}/base.exo`), `utf8`)
      : fs.readFileSync(path.resolve(`${defaultPages}/base.exo`), `utf8`)
    const pageTemplate = fs.readFileSync(route, `utf8`)

    return [baseTemplate, pageTemplate]
  } catch (e) {
    console.error(e)
    throw new Error(e)
  }
}

export const render = (route, options) => {
  const [userPages] = options.pages

  // const { loggedIn } = options
  const loggedIn = true
  const Dashboard = loggedIn ? require(`./dashboard`) : null
  options.ssr_only = true

  const [baseTemplate, pageTemplate] = get(route, options)

  const base = yaml.safeLoad(baseTemplate)
  const page = yaml.safeLoad(pageTemplate, {
    schema: Dashboard ? Dashboard.schema() : schema({ set: true }),
  })
  const result = { ...base, ...page }

  // eslint-disable-next-line prefer-const
  let { html, css } = StyleSheetServer 
    ? StyleSheetServer.renderStatic(() => ReactServer.renderToString(loggedIn && Dashboard
      ? (
        <Dashboard.OffCanvasContainer>
          <Base data={result} pagesPath={userPages} route={route} />
        </Dashboard.OffCanvasContainer>
      )
      : (<Base data={result} pagesPath={userPages} route={route} />)))
    : ({
      html: ReactServer.renderToString(<Base data={result} pagesPath={userPages} route={route} />),
      css: {},
    })
    
  const head = ReactServer.renderToString(
    <Head data={result} />
  )

  Object.keys(options).forEach((key) => {
    if (options[key] !== Object(options[key])) {
      html = html.replace(`{{${key}}}`, options[key])
    }
  })

  const config = configBuilder()
  const { raw } = getGlobal()
  
  const footerScripts = `
    ${process.env.SSR_ONLY === `true` || options.ssr_only
    ? ``
    : process.env.NODE_ENV && process.env.NODE_ENV === `development`
      ? `
  <script src="http://localhost:8081/bundle.js"></script>
  ${config.plugins.map((plugin) => {
    const plug = require(plugin)
    return plug.dev ? `<script src="${plug.dev}"></script>` : ``
  })}`
      : `
  <script src="https://unpkg.com/@exothermic/core/dist/browser.exothermic.min.js"></script>
  ${config.plugins.map((plugin) => {
    const plug = require(plugin)
    return plug.live ? `<script src="${plug.live}"></script>` : ``
  })}`}
    <script>
      window.exothermic = window.exothermic || {};
      window.exothermic.config = ${configBuilder({ stringify: true })};
      window.exothermic.base = "${Base64.encode(baseTemplate)}";
      window.exothermic.page = "${Base64.encode(pageTemplate)}";
      window.exothermic.raw = "${Base64.encode(JSON.stringify(raw))}";
      window.exothermic.options = ${JSON.stringify({ user: options.user, userProfile: options.userProfile })};

      window.renderedClassNames = ${JSON.stringify(css.renderedClassNames)};
      window.exothermic.initialize ? window.exothermic.initialize(window.location.pathname) : null;
    </script>
  `

  return `
    <!doctype html>
    <html lang="en">
      <head>
        ${head}
        <style data-aphrodite>${css.content}</style>
      </head>
      <body>
        <div id="__exothermic">${html}</div>
        ${process.env.SSR_ONLY === `true` || options.ssr_only ? `` : footerScripts}
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
