import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import Cuisinedetailimage from "./Cuisinedetalimage";

export default function CuisineDetail({ isLoading, setIsLoading }) {
  const { category } = useParams();
  const [tagDetails, setTagDetails] = useState([]);

  const navigate = useNavigate();

  //call the Contentful-client to fetch the data
  const contentful = require("contentful");
  const client = contentful.createClient({
    space: "3nafpp0jo6h4",
    environment: "master", // defaults to 'master' if not set
    accessToken: "hsNzkIL8Lrero_6ljmPQHYT7gn9_0sho0Akw6R7tQ_s",
  });

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://cdn.contentful.com/spaces/3nafpp0jo6h4/environments/master/entries?access_token=hsNzkIL8Lrero_6ljmPQHYT7gn9_0sho0Akw6R7tQ_s&metadata.tags.sys.id[in]=${category}`
      )
      .then((response) => {
        console.log(response.data.items);
        setTagDetails(response.data.items);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });

    //   client
    //   .getSpace('3nafpp0jo6h4')
    //   console.log(space)
    //   .then((space) => space.getEnvironment('master'))
    //   .then((env) => env.getEntries({'metadata.tags.sys.id[in]': 'italian,'}))
    //   .then((entries) => console.log(entries))
    //   .catch(console.error)
  }, []);

  function capitalizeFirstLetter(i) {
    return i?.charAt(0).toUpperCase() + i?.slice(1);
  }

  if (isLoading)
    return (
      <div className="loading-div">
        <button className="btn loading-btn" type="button" disabled>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
        </button>
      </div>
    );

  return (
    <div className="cuisine-detail">
      <div className="cuisinedetail-description">
        {capitalizeFirstLetter(category)} Dishes
      </div>
      <div className="container-fluid">
        <div className="recipes">
          {tagDetails?.map((tagDetail) => {
            return (
              <div className="recipe" key={tagDetail.sys.id}>
                <div className="imagediv">
                  {tagDetail.fields.recipeImages?.map((image) => {
                    return (
                      <Cuisinedetailimage
                        id={image.sys.id}
                        key={image.sys.id}
                        setIsLoading={setIsLoading}
                        isLoading={isLoading}
                      />
                    );
                  })}
                </div>
                <div className="recipetitle text-with-shadow">
                  {tagDetail.fields.recipeTitle}
                </div>

                <div className="rating lineheight margin-bottom-half">
                  <>
                    {tagDetail.fields?.recipeRating ? (
                      <span className="ratingstars">
                        {Array(5)
                          .fill()
                          .map((_, i) => {
                            const ratingValue = i + 1;
                            if (ratingValue <= tagDetail.fields?.recipeRating) {
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
                    {tagDetail.fields?.numberOfRatings ? (
                      <span className="reviews margin-left-half small">
                        {tagDetail.fields?.numberOfRatings} reviews
                      </span>
                    ) : (
                      <span className="reviews margin-left-half small">
                        no reviews yet
                      </span>
                    )}
                  </>
                </div>
                <Link to={`/recipes/${tagDetail.sys.id}`}>
                  <button
                    type="button"
                    className="btn btn-secondary btn-m recipedetailbutton"
                  >
                    More
                  </button>
                </Link>
                <Helmet>
                  <title>
                    {" "}
                    {capitalizeFirstLetter(category)} Dishes - Easy Peasy
                  </title>
                  <meta
                    name="find all categories here"
                    content="All easy peasy recipes"
                  />
                </Helmet>
              </div>
            );
          })}
        </div>
      </div>
      <div className="row back-btn">
        <Link
          onClick={() => navigate(-1)}
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
            Go back
          </span>
        </Link>
      </div>
    </div>
  );
}
