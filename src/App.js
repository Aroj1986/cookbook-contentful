import './App.css';
import Recipes from './components/Recipe/Recipes';
import {Routes, Route} from 'react-router-dom';
import Recipedetail from './components/Recipe/Recipedetail';
import Header from './components/header/Header'
import Home from './components/Home/Home'
import Ingredients from './components/header/Ingredients'
import Cuisine from './components/header/Cuisine'
import Register from './components/header/Register'
import Login from './components/header/Login'

function App() {



  return (
    <>
    <div className="App">
      <h1 className="title">Easy Peasy Recipes</h1>
      <Header />
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
