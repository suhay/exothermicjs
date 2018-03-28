import path from 'path';
import express from 'express';
import React from 'react';
import ReactServer from 'react-dom/server';
import App from './components/App';
import fs from 'fs';
import yaml from 'js-yaml';

const app = express();

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.get('*', (req, res) => {
  try {
    const config = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, '../src/pages/base.yml'), 'utf8'));
    const indentedJson = JSON.stringify(config, null, 4);
    console.log(indentedJson);
  } catch (e) {
      console.log(e);
  }
  
  const html = fs.readFileSync(path.resolve(__dirname, '../public/index.html')).toString();
  const markup = ReactServer.renderToString(<App />);

  res.send(html.replace('$react', markup));
});

app.listen(3001, () => {
  console.log('React app listening on port 3001!')
});