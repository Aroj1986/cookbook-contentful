import React from 'react';
import ReactDOM from 'react-dom/client';
import "./components/header/header.css"
import "./components/Recipe/recipe.css"
import "./components/footer/footer.css"
import "./components/Cuisine/cuisine.css"
import "./App.css"
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);

