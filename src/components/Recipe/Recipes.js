import { Link } from 'react-router-dom';


export default function Recipes ({recipe}) {


            return (
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
            )
    
}