import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

import './index.scss';

const root = createRoot(document.getElementById('app'));
root.render(<App />);
