import path from 'path'
import fs from 'fs'
import yaml from 'js-yaml'

import React from 'react'
import ReactServer from 'react-dom/server'
import { StaticRouter } from 'react-router'

import { REACTY_SCHEMA } from '../reacty.config.js'
import pageState from './state/page'
import Head from 'Components/Head'
import Base from 'Components/Base'
import Page from 'Components/Page'

/**
 * Build page with templates.
 *
 * @param {string} route - The page route
 * @param {string} pages - Path to page template folder relative to index.html
 */
export function build(route, pages) {
	const base = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, pages + '/base.yml'), 'utf8'))
	try {
		const page = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, pages + '/' + (route === '/' ? 'index' : route) + '.yml'), 'utf8'), {
			schema: REACTY_SCHEMA
		})
		const result = { ...base,	...page }
    const context = {}
		pageState.setState({ pagesPath: pages })
		const markup = ReactServer.renderToString(
			<StaticRouter location={route} context={context}>
				<Base data={result} pages={pages} route={route} />
			</StaticRouter>
		)
		const head = ReactServer.renderToString(
			<Head data={result} />
		)
		const html = fs.readFileSync(path.resolve(__dirname, pages + '/../static/index.html')).toString();
		return html.replace('{{ head }}', head).replace('{{ body }}', markup)
	} 
	catch (e) {
    throw new Error(e)
	} 
}

export function bedew(route, pages) {
	const page = fs.readFileSync(path.resolve(__dirname, pages + '/' + (route === '/' ? 'index' : route) + '.yml'), 'utf8')
	return page
}