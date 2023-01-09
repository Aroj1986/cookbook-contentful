import React from 'react'
import AboutUs from '../AboutUs/Aboutus'
import SliderImage from './group1.jpg'
import { useState, useEffect } from "react";
import "./Home.css"

function Home() {
  const contentful = require("contentful");
  const client = contentful.createClient({
  space: "3nafpp0jo6h4",
  environment: "master", // defaults to 'master' if not set
  accessToken: "hsNzkIL8Lrero_6ljmPQHYT7gn9_0sho0Akw6R7tQ_s",
});
const [recipes, setRecipes] = useState([]);

useEffect(() => {
  client
    .getEntries()
    .then((response) => {
      console.log(response.items)
      setRecipes(response.items);
    })
    .catch(console.error);
}, []);


  return (
    <div className="container">
      <img src={SliderImage} className="img-fluid" alt="H"></img>
      <div className="row">
        <div className="col col-md-9">
        <div className="row">
        <div className="hr-sect">Our Top Rated Recipes</div>
        {recipes?.map((recipe) => {
          console.log(recipe);
          if (recipe.fields.recipeRating === 5) {
            return (
              <div className="col col-md-4"> 
                <img
                    className="image margin-bottom1"
                    src={recipe.fields.recipeImages[0].fields.file.url}
                  ></img>
                  <p>{recipe.fields.recipeTitle}</p>
                  
                   <span className="ratingstars">
                    {Array(5)
                        .fill()
                        .map((_, i) => {
                        const ratingValue = i + 1;
                        if (ratingValue <= recipe.fields?.recipeRating) {
                            return <span key={i}>★</span>;
                        } else {
                            return <span key={i}>☆</span>;
                        }
                        })}
                    </span>
                    <br/>
                    
                    <button type="button" className="btn btn-dark">Learn more</button>
              </div>    
            );
          }
          return null;
        })}
        </div>
        </div>
        <AboutUs />
        </div>
    </div>
  )
}

export default Home
