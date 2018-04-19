import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';

import React from 'react';
import ReactServer from 'react-dom/server';
import { StaticRouter } from 'react-router'

import Head from 'Components/Head';
import Base, { REACTY_SCHEMA } from 'Components/Base';
// import Page from 'Components/Page';

/**
 * Build page with templates.
 *
 * @param {string} route - The page route
 * @param {string} pages - Path to page template folder relative to index.html
 */
export function build (route, pages) {
  let result = '';
  const base = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, pages + '/base.yml'), 'utf8'));
  try {
    const page = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, pages + '/' + (route === '/' ? 'index' : route) + '.yml'), 'utf8'), { schema: REACTY_SCHEMA });
    result = {...base,...page};
  } 
  catch (e) {
    console.error(e);
    result = base;
    result.data.description = "404";
    result.data.title = "Page not found!";
  } 
  finally {
    const context = {};
    const markup = ReactServer.renderToString(
      <StaticRouter location={route} context={context}>
        <Base data={result} pages={pages} route={route} />
      </StaticRouter>
    );
    const head = ReactServer.renderToString(
      <Head data={result} />
    );
    const html = fs.readFileSync(path.resolve(__dirname, pages + '/../index.html')).toString();
    return html.replace('<meta name="generator" content="reacty">', head).replace('$body-placeholder', markup);
  }
}
