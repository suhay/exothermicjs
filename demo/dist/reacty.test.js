import path from 'path';
import express from 'express';

import { build } from '../../lib/reacty';

const app = express();
const pages = path.resolve(__dirname, './pages');

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.send(build('/', pages));
});

app.get('/:page', (req, res) => {
  res.send(build(req.params.page, pages));
});

app.listen(3001, () => {
  console.log('React app listening on port 3001!')
});