import './template.html';
import './index.scss';
import './js/main.js'

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app';

const container = document.getElementById('root')
const root = createRoot(container);
root.render(<App />);