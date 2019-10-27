/* eslint-disable indent */
import path from 'path'
import fs from 'fs'
import yaml from 'js-yaml'
import React from 'react'
import { getGlobal, setGlobal } from 'reactn'
import ReactServer from 'react-dom/server'
import { Base64 } from 'js-base64'
import { StyleSheetServer } from 'aphrodite'
import { StaticRouter } from 'react-router'

import Head from './components/head'
import Base from './components/base'
import configBuilder from './config'
import { apply } from './schema'

/**
 * From the given route, returns a tuple of the discovered base and route templates (user defined taking preference).
 * @param {string} route The page or template route to find
 * @param {{}} options A collection of options to apply
 * @returns {[string,string]} [baseTemplate, pageTemplate]
 */
export const get = (route, options = {}) => {
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

/**
 * From the given route, returns a collection containing the parsed template, base template, and route template
 * @param {string} route The page or template route to find
 * @param {*} options A collection of options to apply
 * @returns {{result:React.Component, baseTemplate: string, pageTemplate: string}}
 */
export const template = (route, options = {}) => {
  try {
    let [baseTemplate, pageTemplate] = get(route, options)

    Object.keys(options).forEach((key) => {
      if (options[key] !== Object(options[key])) {
        baseTemplate = baseTemplate.replace(`{{${key}}}`, options[key])
        pageTemplate = pageTemplate.replace(`{{${key}}}`, options[key])
      }
    })

    const base = yaml.safeLoad(baseTemplate)
    const page = apply(pageTemplate)

    return {
      result: {
        ...base, 
        ...page, 
      },
      baseTemplate,
      pageTemplate,
    }
  } catch (e) {
    console.error(e)
    throw new Error(e)
  }
}

/**
 * Returns a fully formed HTML page
 * @param {string} route The page or template route to find
 * @param {{}} options A collection of options to apply
 * @returns {string} Page HTML
 */
export const render = (route, options = {}) => {
  const config = configBuilder()
  const [userPages] = options.pages
  
  setGlobal({ 
    route: route.replace(userPages, `/`).replace(/index\.exo|\.exo/, ``),
    ...options,
  })

  const { 
    loggedIn, 
    ssrOnly, 
    user, 
    userProfile,
  } = options
  
  const Dashboard = loggedIn ? require(`./dashboard`) : null
  const { result, baseTemplate, pageTemplate } = template(route, options)
  const context = {}

  const { html, css } = StyleSheetServer 
    ? StyleSheetServer.renderStatic(() => ReactServer.renderToString(loggedIn && Dashboard && Dashboard.set !== false
      ? (
        <StaticRouter location={route} context={context}>
          <Dashboard.OffCanvasContainer>
            <Base data={result} pagesPath={userPages} />
          </Dashboard.OffCanvasContainer>
        </StaticRouter>
      ) : (
        <StaticRouter location={route} context={context}>
          <Base data={result} pagesPath={userPages} />
        </StaticRouter>
      )))
    : ({
      html: ReactServer.renderToString(
        <StaticRouter location={route} context={context}>
          <Base data={result} pagesPath={userPages} />
        </StaticRouter>
      ),
      css: {},
    })

  const head = ReactServer.renderToString(
    <Head data={result} />
  )

  const { raw } = getGlobal()
  const pluginType = process.env.NODE_ENV && process.env.NODE_ENV === `development` ? `dev` : `live`

  const footerScripts = `
    ${Array.isArray(config[pluginType])
      ? config[pluginType].map((plugin) => `<script src="${plugin}"></script>`).join(``)
      : config[pluginType] ? `<script src="${config[pluginType]}"></script>` : ``}
    ${(config.plugins || [])
      .filter((plug) => {
        try { 
          require.resolve(plug) 
        } catch (e) { 
          return false 
        }
        return true
      })
      .map((plugin) => {
        const plug = require(plugin)
        return plug[pluginType] ? `<script src="${plug[pluginType]}"></script>` : ``
      })
      .join(``)
    }
    ${Dashboard && Dashboard.set !== false ? `<script src="${Dashboard[pluginType]}"></script>` : ``}
    <script>
      window.exothermic = window.exothermic || {};
      window.exothermic.config = ${JSON.stringify(config)};
      window.exothermic.base = "${Base64.encode(baseTemplate)}";
      window.exothermic.page = "${Base64.encode(pageTemplate)}";
      window.exothermic.raw = "${Base64.encode(JSON.stringify(raw))}";
      window.exothermic.options = ${JSON.stringify({ user, userProfile, dashboard: Dashboard && Dashboard.set !== false ? Dashboard.name : `` })};

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
        ${process.env.SSR_ONLY === `true` || ssrOnly ? `` : footerScripts}
      </body>
    </html>
  `
}

export { default as hydrate } from './hydrate'
