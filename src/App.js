import './App.css';
import Recipes from './components/Recipe/Recipes';
import {useState, useEffect} from "react";
import {Routes, Route, Link, useNavigate, NavLink} from 'react-router-dom';
import Recipedetail from './components/Recipe/Recipedetail';

import Header from './components/header/Header'
import Home from './components/header/Home'
import Ingredients from './components/header/Ingredients'
import Cuisine from './components/header/Cuisine'
import Register from './components/header/Register'
import Login from './components/header/Login'

function App() {

  const [recipes, setRecipes] = useState([])


  //call the Contentful-client to fetch the data
  const contentful = require('contentful')
  const client = contentful.createClient({
    space: '3nafpp0jo6h4',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'hsNzkIL8Lrero_6ljmPQHYT7gn9_0sho0Akw6R7tQ_s'
  })

  useEffect(() =>{
  client.getEntries()
  .then((response) => {
    console.log(response.items)
    setRecipes(response.items)})
  .catch(console.error)
  }, [])


  return (
    <>
    <div className="App">
      <h1 className="title">Easy Peasy Recipes</h1>
            <Header />
    <div className="recipes">
    <Recipedetail />
      {recipes?.map((recipe) => {
        return <Recipes recipe={recipe} key={recipe.sys.id} /> })}
    </div>
    <Routes>
      <Route path='/home' element={<Home />}></Route>
      <Route path="/recipes" element={<Recipes />}></Route>
      <Route path="/recipes/:id" element={<Recipedetail />}></Route>
      <Route path='/ingredients' element={<Ingredients />}></Route>
      <Route path='/cuisine' element={<Cuisine />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/login' element={<Login />}></Route>
    </Routes>
    </div>
    </>
  );
}

export default App;
