import './App.css';
import Recipe from './components/Recipe/Recipe';
import {useState} from "react";
import AboutUs from './components/AboutUs/Aboutus';

function App() {

  const [recipes, setRecipes] = useState([])



  return (
    <div className="App">
      <h1>Easy Peasy Recipes</h1>
      <Recipe />
      <AboutUs />
    </div>
  );
}

export default App;
