import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Route
import { BrowserRouter } from 'react-router-dom';

// Redux
import {store} from './app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
<Provider store={store}>
<App />
</Provider>
    </BrowserRouter>
  </React.StrictMode>
);


