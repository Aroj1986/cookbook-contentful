import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import Cuisinedetailimage from "./Cuisinedetalimage";

export default function CuisineDetail() {
  const { category } = useParams();

  const [tagDetails, setTagDetails] = useState([]);

  //call the Contentful-client to fetch the data
  const contentful = require("contentful");
  const client = contentful.createClient({
    space: "3nafpp0jo6h4",
    environment: "master", // defaults to 'master' if not set
    accessToken: "hsNzkIL8Lrero_6ljmPQHYT7gn9_0sho0Akw6R7tQ_s",
  });

  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/3nafpp0jo6h4/environments/master/entries?access_token=hsNzkIL8Lrero_6ljmPQHYT7gn9_0sho0Akw6R7tQ_s&metadata.tags.sys.id[in]=${category}`
      )
      .then((response) => {
        console.log(response.data.items);
        setTagDetails(response.data.items);
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
    </div>
  );
}
