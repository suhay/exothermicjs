import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';

import React from 'react';
import ReactServer from 'react-dom/server';

import Head from './components/Head';
import Base, { REACTY_SCHEMA } from './components/Base';
import Page from './components/Page';

/**
 * Build page with templates.
 *
 * @param {string} route - The page route
 * @param {string} pages - Path to page template folder relative to index.html
 */
export function build (route, pages) {
  var result = '';
  const base = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, pages + '/base.yml'), 'utf8'));
  try {
    const page = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, pages + '/' + route + '.yml'), 'utf8'), { schema: REACTY_SCHEMA });
    result = {...base,...page};
  } 
  catch (e) {
    console.error(e);
    result = base;
    result.data.description = "404";
    result.data.title = "Page not found!";
  } 
  finally {
    var markup = ReactServer.renderToString(React.createElement(Page, { data: result }));
    var head = ReactServer.renderToString(React.createElement(Head, { data: result }));
    var html = fs.readFileSync(path.resolve(__dirname, pages + '/../index.html')).toString();
    return html.replace('<meta name="generator" content="reacty">', head).replace('$body-placeholder', markup);
  }
}
