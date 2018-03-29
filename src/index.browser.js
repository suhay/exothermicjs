import React from 'react';
import ReactDOM from 'react-dom';
import Base from './components/Base';
import './styles/index.css';

const root = document.getElementById('root');

ReactDOM.hydrate(<Base />, root);