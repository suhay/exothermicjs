import path from 'path'
import fs from 'fs'
import yaml from 'js-yaml'
import React from 'react'
import ReactServer from 'react-dom/server'
import { Base64 } from 'js-base64'

import Head from './components/head'
import Base from './components/base'
import configBuilder from './config'
import schema from './schema'

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
  const { pages, test } = options
  const templates = get(route, options)
  const base = yaml.safeLoad(templates[0])

  const page = yaml.safeLoad(templates[1], {
    schema: schema(),
  })
  const result = { ...base, ...page }
  const context = {}

  let markup = ReactServer.renderToString(
    <Base data={result} pagesPath={pages[0]} context={context} route={route} />
  )

  Object.keys(options).forEach((key) => {
    if (options[key] !== Object(options[key])) {
      markup = markup.replace(`{{${key}}}`, options[key])
    }
  })

  const config = configBuilder()

  const head = ReactServer.renderToString(
    <Head data={result} />
  )

  const devScripts = `
    <script src="http://localhost:8081/bundle.js"></script>
  ${config.plugins.map((plugin) => {
    const plug = require(plugin)
    return `<script src="${plug.dev}"></script>`
  })}
  `
  // Loop over all plugins, output there dev paths

  const prodScripts = `
    <script src="https://unpkg.com/@exothermic/core/dist/browser.exothermic.min.js"></script>
  `
  // Loop over all plugins, output there live paths

  const footerScripts = `
    ${process.env.SSR_ONLY === `true` || options.ssr_only
    ? ``
    : process.env.NODE_ENV && process.env.NODE_ENV === `development`
      ? devScripts
      : prodScripts}
    <script>
      exothermic.config = ${configBuilder({ stringify: true })};
      exothermic.base = "${Base64.encode(templates[0])}";
      exothermic.page = "${Base64.encode(templates[1])}";
      exothermic.initialize(window.location.pathname);
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
