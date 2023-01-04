import './App.css';
import Recipes from './components/Recipe/Recipes';
import {useState, useEffect} from "react";
import {Routes, Route, Link, useNavigate, NavLink} from 'react-router-dom';
import Landingpage from "./components/Landingpage/Landingpage"
import Recipedetail from './components/Recipe/Recipedetail';




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
    <h1>Easy Peasy Recipes</h1>
    <div className="recipes">
    <Recipedetail />
      {recipes?.map((recipe) => {
        return <Recipes recipe={recipe} key={recipe.sys.id} /> })}
    </div>
    <Routes>
      <Route path="/" element={<Landingpage />}></Route>
      <Route path="/recipes" element={<Recipes />}></Route>
      <Route path="/recipes/:id" element={<Recipedetail />}></Route>
    </Routes>
    </div>
    </>
  );
}

export default App;
