import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function Recipes ({recipe}) {

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
        <div className="recipes">
            {recipes?.map((recipe) => {
            return  (
            <div className="recipe">
                 <div className="imagediv">
                    {recipe.fields.recipeImages?.map((image) => {
                        return <img className="image" src={image.fields?.file.url} key={image.sys.id}></img>
                    })}
                </div>
                <div className="title">{recipe.fields.recipeTitle}</div>
                <div className="rating">
                    <span className="ratingstars">{recipe.fields.recipeRating} stars & </span>
                    <span className="reviews">{recipe.fields.numberOfRatings} reviews</span>
                </div>

                <Link to="">
                <button>View More</button>
                </Link>
               
            </div>
                        )})}

            </div>
            )
    
}