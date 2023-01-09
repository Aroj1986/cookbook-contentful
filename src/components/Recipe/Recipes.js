import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);

  //call the Contentful-client to fetch the data
  const contentful = require("contentful");
  const client = contentful.createClient({
    space: "3nafpp0jo6h4",
    environment: "master", // defaults to 'master' if not set
    accessToken: "hsNzkIL8Lrero_6ljmPQHYT7gn9_0sho0Akw6R7tQ_s",
  });

  useEffect(() => {
    client.getEntries({
      content_type: "ourCookbook"
    })
      .then((response) => {
        console.log(response.items)
        setRecipes(response.items);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="container-fluid">
        <Helmet>
        <title>All Recipes - Easy Peasy</title>
        <meta name="find all recipes here" content="All easy peasy recipes" />
        </Helmet>
    <div className="recipes">
      {recipes?.map((recipe) => {
        return (
          <div className="recipe" key={recipe.sys.id}>
            <div className="imagediv">
              {recipe.fields.recipeImages?.map((image) => {
                return (
                  <img
                    className="image margin-bottom1"
                    src={image.fields?.file.url}
                    key={image.sys.id}
                  ></img>
                );
              })}
            </div>
            <div className="recipetitle text-with-shadow">{recipe.fields.recipeTitle}</div>

            <div className="rating lineheight margin-bottom-half">
                <>
                    {recipe.fields?.recipeRating
                    ?
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
                    :
                    <span className="reviews small bold">no ratings yet</span>
                    }
            </>
            <>
               {recipe.fields?.numberOfRatings
                ?
                    <span className="reviews margin-left-half small bold">
                        {recipe.fields?.numberOfRatings} reviews
                    </span>
                :
                    <span className="reviews margin-left-half small bold">no reviews yet</span>}
            </>
          </div>

            <Link to={`/recipes/${recipe.sys.id}`}>
              <button type="button" className="btn btn-secondary btn-sm recipedetailbutton">Show More</button>
            </Link>
          </div>
        );
      })}
    </div>
    </div>
  );
}
