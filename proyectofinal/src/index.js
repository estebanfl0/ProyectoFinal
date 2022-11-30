import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from "react-router-dom";
import { App } from './controllers/App';
import { ApiProvider } from './controllers/context/ExampleContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ApiProvider>
        <App />
    </ApiProvider>

    
    
    </BrowserRouter>
  </React.StrictMode>
);



