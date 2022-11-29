import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './controllers/App';
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from './controllers/context/ExampleContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ApiProvider>

      <App/>
    </ApiProvider>

    
    
    </BrowserRouter>
  </React.StrictMode>
);



