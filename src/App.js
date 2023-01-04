import './App.css';
import Recipe from './components/Recipe/Recipe';
import {useState} from "react";

function App() {

  const [recipes, setRecipes] = useState([])



  return (
    <div className="App">
      <h1>Easy Peasy Recipes</h1>
      <Recipe />
    </div>
  );
}

export default App;
