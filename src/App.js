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
import Footer from './components/footer/Footer';

function App() {



  return (
    <>
      <Header />
      <div className="main">
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
    <Footer />
    </>
  );
}

export default App;
