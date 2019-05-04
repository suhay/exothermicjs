import path from 'path'
import fs from 'fs'
import yaml from 'js-yaml'
import React from 'react'
import ReactServer from 'react-dom/server'
import { StaticRouter } from 'react-router'

import { Schema } from '../'
import { pageState } from './state'
import Head from './components/Head'
import Base from './components/Base'
import Page from './components/Page'
import { isBrowser } from './components/util'

let Dashboard = null, dasboardConfig = null

export function render(route, options) {
  const { _pages } = options
  const templates = get(route, options)
  const base = yaml.safeLoad(templates[0])
  console.log(Dashboard)
  if (options._dashboard && !Dashboard) {
    try { 
      const dash = require('./dashboard')
      Dashboard = dash.load() 
      dasboardConfig = dash.config()
    } catch (e) {
      console.error(e)
    }
  }

  const page = yaml.safeLoad(templates[1], {
    schema: options._dashboard && Dashboard
      ? Dashboard.Schema()
      : Schema()
  })
  const result = { ...base,	...page }
  const context = {}

  pageState.setState({ pagesPath: _pages[0] })
  
  let markup = ReactServer.renderToString(
    options._dashboard
      ? <StaticRouter location={route} context={context}>
          <Dashboard.OffCanvas>
            <Base data={result} browser={options._test ? false : isBrowser()} />
          </Dashboard.OffCanvas>
        </StaticRouter>
      : <StaticRouter location={route} context={context}>
          <Base data={result} browser={options._test ? false : isBrowser()} />
        </StaticRouter>
  )

  for (var key in options) {
    if (options.hasOwnProperty(key) && key.substring(0,1) !== '_') {
      markup = markup.replace(`{{${key}}}`, options[key])
    }
  }

  const head = ReactServer.renderToString(
    <Head data={result} />
  )
  
  const footerScripts = `
    ${process.env.SSR_ONLY === 'true' || options._ssr_only 
        ? `` 
        : process.env.NODE_ENV && process.env.NODE_ENV == 'development'
          ? `<script src="/browser.js"></script>`
          : `<script src="https://unpkg.com/exothermicjs/dist/browser.exothermic.min.js"></script>`}
    ${options._dashboard && dasboardConfig
        ? `<script src="${process.env.NODE_ENV && process.env.NODE_ENV == 'development' ? dasboardConfig.dev : dasboardConfig.live}"></script>`
        : `` }
    <script>
        var config = {
          dashboard: ${options._dashboard ? `'endo'` : null}
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

export function get(route, options) {
  try {
    const { _pages } = options
    const baseTemplate = fs.existsSync(path.resolve(_pages[0] + '/base.exo'))
      ? fs.readFileSync(path.resolve(_pages[0] + '/base.exo'), 'utf8')
      : fs.readFileSync(path.resolve(_pages[1] + '/base.exo'), 'utf8')
    const pageTemplate = fs.readFileSync(route, 'utf8')

    return [ baseTemplate, pageTemplate ]
  } 
	catch (e) {
    console.error(e)
    throw new Error(e)
	}
}

export function hydrate(route, options) {
	let markup = fs.readFileSync(route, 'utf8')
  for (var key in options) {
    if (options.hasOwnProperty(key) && key.substring(0,1) !== '_') {
      markup = markup.replace(`{{${key}}}`, options[key])
    }
  }
	return markup
}