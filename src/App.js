import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/header/Home'
import AllRecipes from './components/header/AllRecipes'
import Ingredients from './components/header/Ingredients'
import Cuisine from './components/header/Cuisine'
import Register from './components/header/Register'
import Login from './components/header/Login'

function App() {

  return (
    <div>
      <h1 className="title">Easy Peasy Recipes</h1>
      <Header />
      <hr />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/all-recipes' element={<AllRecipes />}></Route>
        <Route path='/ingredients' element={<Ingredients />}></Route>
        <Route path='/cuisine' element={<Cuisine />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
