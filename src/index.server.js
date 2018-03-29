import path from 'path';
import express from 'express';
import React from 'react';
import ReactServer from 'react-dom/server';
import Head from './components/Head';
import Base from './components/Base';
import Page from './components/Page';
import fs from 'fs';
import yaml from 'js-yaml';

const app = express();

const build = function(url) {
  let result = '';
  try {
    const base = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, '../src/pages/base.yml'), 'utf8'));
    if (url === "/") {
      const page = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, '../src/pages/index.yml'), 'utf8'));
      result = {...base,...page};
    } else {
      // Find page name
      const page = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, '../src/pages/'+path+'.yml'), 'utf8'));
      result = {...base, ...page};
    }
  } catch (e) {
    // 404 page
    result = base;
    console.error(e);
  } finally {
    const markup = ReactServer.renderToString(<Page data={result} />);
    const head = ReactServer.renderToString(<Head data={result} />);
    const html = fs.readFileSync(path.resolve(__dirname, '../public/index.html')).toString();
    return html.replace('<meta name="generator" content="Reacty">', head).replace('$body-placeholder', markup)
  }
}

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.send(build('/'));
});

app.get('/:page', (req, res) => {
  console.log(req);
  res.send(build(req.params.page));
});

app.listen(3001, () => {
  console.log('React app listening on port 3001!')
});