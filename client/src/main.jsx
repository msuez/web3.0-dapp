import React from 'react';
import ReactDOM from 'react-dom';

import {
  TransactionsProvider
} from './context/TransactionsContext';

import './index.css';
import App from './App';

ReactDOM.render(
  <TransactionsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionsProvider>,
  document.getElementById('root')
)
