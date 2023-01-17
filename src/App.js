import './App.css';
import {useState} from "react";
import Recipes from './components/Recipe/Recipes';
import {Routes, Route} from 'react-router-dom';
import Recipedetail from './components/Recipe/Recipedetail';
import Header from './components/header/Header'
import Home from './components/Home/Home'
import Cuisine from './components/Cuisine/Cuisine'
import Ingredients from './components/Ingredients/Ingredients'
import Register from './components/header/Register'
import Login from './components/header/Login'
import Footer from './components/footer/Footer';
import CuisineDetail from './components/Cuisine/Cuisinedetail';


function App() {

  const [isLoading, setIsLoading] = useState(false)
  console.log(isLoading)



  return (
    <>
      <Header />
      <div className="main">
       <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/recipes" element={<Recipes setIsLoading={setIsLoading} isLoading={isLoading}/>}></Route>
        <Route path="/recipes/:id" element={<Recipedetail setIsLoading={setIsLoading} isLoading={isLoading}/>}></Route>
        <Route path='/ingredients' element={<Ingredients />}></Route>
        <Route path='/cuisine' element={<Cuisine setIsLoading={setIsLoading} isLoading={isLoading}/>}></Route>
        <Route path='/cuisine/:category' element={<CuisineDetail setIsLoading={setIsLoading} isLoading={isLoading}/>}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
