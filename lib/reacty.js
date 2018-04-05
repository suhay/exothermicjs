import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';

import React from 'react';
import ReactServer from 'react-dom/server';

// Components
import Head from './components/Head';
import Base from './components/Base';
import Page from './components/Page';

// Modules to load
import { NavbarYamlType } from './modules/navbar/Navbar';
import { LAYOUT_SCHEMA } from './modules/layout/Section';
import { GetYamlType } from './modules/util/Get';

/**
 * Build page with templates.
 *
 * @param {string} route - The page route
 * @param {string} pages - Path to page template folder relative to index.html
 */
function build(route, pages) {
  var result = '';
  const REACTY_SCHEMA = yaml.Schema.create([LAYOUT_SCHEMA], [NavbarYamlType, GetYamlType]);
  try {
    const base = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, pages + '/base.yml'), 'utf8'));
    if (route === "/") {
      const page = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, pages + '/index.yml'), 'utf8'), { schema: REACTY_SCHEMA });
      result = {...base,...page};
    } else {
      // Find page name
      const page = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, pages + '/' + path + '.yml'), 'utf8'), { schema: REACTY_SCHEMA });
      result = {...base, ...page};
    }
  } catch (e) {
    // TODO : 404 page
    result = base;
    result.data.description = "404";
  } finally {
    const markup = ReactServer.renderToString(<Page data={result} />);
    const head = ReactServer.renderToString(<Head data={result} />);
    const html = fs.readFileSync(path.resolve(__dirname, pages + '/../index.html')).toString();
    
    return html.replace('<meta name="generator" content="reacty">', head).replace('$body-placeholder', markup)
  }
}

export { build }; 