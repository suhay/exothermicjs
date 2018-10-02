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

export function build(route, options) {
  const { _pages, message, error } = options
	const base = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, _pages + '/base.exo'), 'utf8'))
	try {
		const page = yaml.safeLoad(fs.readFileSync(route, 'utf8'), {
			schema: EXO_SCHEMA
		})
		const result = { ...base,	...page }
    const context = {}
    
		pageState.setState({ pagesPath: _pages })
		let markup = ReactServer.renderToString(
			<StaticRouter location={route} context={context}>
				<Base data={result} pages={_pages} route={route} force={!isBrowser()} />
			</StaticRouter>
		)
    
    if (message && error) {
      markup = markup.replace('{{message}}', message)
      markup = markup.replace('{{error}}', error)
    }

    const head = ReactServer.renderToString(
			<Head data={result} />
		)
    
    const browserScript = process.env.SSR_ONLY === 'true'
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
	catch (e) {
    throw new Error(e)
	} 
}

export function hydrate(route, options) {
  const { _pages, message, error } = options
	const page = fs.readFileSync(route, 'utf8')
	return page
}