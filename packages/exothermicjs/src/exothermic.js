import path from 'path'
import fs from 'fs'
import yaml from 'js-yaml'

import React from 'react'
import ReactServer from 'react-dom/server'
import { StaticRouter } from 'react-router'

import { EXO_SCHEMA } from '../exothermic.config.js'
import pageState from './state/page'
import Head from 'Components/Head'
import Base from 'Components/Base'
import Page from 'Components/Page'
import { isBrowser } from 'Components/util'

export function render(route, options) {
  const { markup, result } = get(route, options)
  const head = ReactServer.renderToString(
    <Head data={result} />
  )
  const browserScript = process.env.SSR_ONLY === 'true' || options._ssr_only
    ? ``
    : process.env.NODE_ENV && process.env.NODE_ENV == 'development'
      ? "/browser.js"
      : "https://unpkg.com/exothermicjs/dist/browser.exothermic.min.js"

  return `
    <!doctype html>
    <html lang="en">
      <head>${head}</head>
      <body>
        <div id="__exothermic">${markup}</div>
        ${browserScript == `` ? `` : `<script src="${browserScript}"></script>`}
      </body>
    </html>
  `
}

export function get(route, options) {
  const { _pages } = options
  const baseTemplate = fs.existsSync(path.resolve(_pages[0] + '/base.exo'))
    ? fs.readFileSync(path.resolve(_pages[0] + '/base.exo'), 'utf8')
    : fs.readFileSync(path.resolve(_pages[1] + '/base.exo'), 'utf8')

	const base = yaml.safeLoad(baseTemplate)
  
  try {
		const page = yaml.safeLoad(fs.readFileSync(route, 'utf8'), {
			schema: EXO_SCHEMA
		})
		const result = { ...base,	...page }
    // options.attr = 'all' // This will add all data attributes to the markup before being sent back
    const context = {}
    
		pageState.setState({ pagesPath: _pages[0] })
		let markup = ReactServer.renderToString(
			<StaticRouter location={route} context={context}>
				<Base data={result} force={!isBrowser()} />
			</StaticRouter>
		)
    
    for (var key in options) {
      if (options.hasOwnProperty(key) && key.substring(0,1) !== '_') {
        markup = markup.replace(`{{${key}}}`, options[key])
      }
    }
  
    return { markup, result }
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