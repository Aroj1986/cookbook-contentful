import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Recipesearchbar from "./Recipesearchbar";

export default function Recipes({setIsLoading, isLoading}) {
  const [recipes, setRecipes] = useState([]);
  const [allRecipesBtn, setAllRecipesBtn] = useState(true);

  const navigate = useNavigate();

  //call the Contentful-client to fetch the data
  const contentful = require("contentful");
  const client = contentful.createClient({
    space: "3nafpp0jo6h4",
    environment: "master", // defaults to 'master' if not set
    accessToken: "hsNzkIL8Lrero_6ljmPQHYT7gn9_0sho0Akw6R7tQ_s",
  });

  useEffect(() => {
    setIsLoading(true)
    client
      .getEntries({
        content_type: "ourCookbook",
      })
      .then((response) => {
        setRecipes(response.items);
        setIsLoading(false)

      })
      .catch(console.error);
  }, []);


  if (isLoading)
    return (
        <div className="loading-div">
            <button class="btn loading-btn" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button>
        </div>
    )

  return (
    <div className="container-fluid">
      <Helmet>
        <title>All Recipes - Easy Peasy</title>
        <meta name="find all recipes here" content="All easy peasy recipes" />
      </Helmet>
      <Recipesearchbar
        setRecipes={setRecipes}
        setAllRecipesBtn={setAllRecipesBtn}
      />
      
      {recipes.length !== 0
      ?
      <>
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
              <div className="recipetitle text-with-shadow">
                {recipe.fields.recipeTitle}
              </div>

              <div className="rating lineheight margin-bottom-half">
                <>
                  {recipe.fields?.recipeRating ? (
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
                  ) : (
                    <span className="reviews small">no ratings yet</span>
                  )}
                </>
                <>
                  {recipe.fields?.numberOfRatings ? (
                    <span className="reviews small">
                      {recipe.fields?.numberOfRatings} reviews
                    </span>
                  ) : (
                    <span className="reviews small">no reviews yet</span>
                  )}
                </>
              </div>

              <Link to={`/recipes/${recipe.sys.id}`}>
                <button
                  type="button"
                  className="btn btn-secondary btn-m recipedetailbutton"
                >
                  More
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className={allRecipesBtn ? 'hidden' : 'text-center'}>
        <Link onClick={() => navigate(0)} 
        className="textdecoration-none text-center"
        >
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-skip-backward-btn "
              viewBox="0 0 16 16"
            >
              <path d="M11.21 5.093A.5.5 0 0 1 12 5.5v5a.5.5 0 0 1-.79.407L8.5 8.972V10.5a.5.5 0 0 1-.79.407L5 8.972V10.5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 1 0v1.528l2.71-1.935a.5.5 0 0 1 .79.407v1.528l2.71-1.935z" />
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
          </span>
          <span className="bold lineheight margin-left-half textdecoration-none half-small">
            back to all recipes
          </span>
        </Link>
      </div>
      </>
      :
      <div className="nosearchresults">
        <div className="nosearchresultstext">No search results <br></br> Try again</div>
        <div className={allRecipesBtn ? 'hidden' : 'text-center'}>
        <Link onClick={() => navigate(0)} 
        className="textdecoration-none text-center"
        >
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-skip-backward-btn "
              viewBox="0 0 16 16"
            >
              <path d="M11.21 5.093A.5.5 0 0 1 12 5.5v5a.5.5 0 0 1-.79.407L8.5 8.972V10.5a.5.5 0 0 1-.79.407L5 8.972V10.5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 1 0v1.528l2.71-1.935a.5.5 0 0 1 .79.407v1.528l2.71-1.935z" />
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
          </span>
          <span className="bold lineheight margin-left-half textdecoration-none half-small">
            back to all recipes
          </span>
        </Link>
      </div>
      </div>
      }
    </div>
  );
}
