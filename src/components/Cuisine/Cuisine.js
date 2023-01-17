import React from "react";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Cuisine({ isLoading, setIsLoading }) {
  const [tags, setTags] = useState([]);

  //call the Contentful-client to fetch the data
  const contentful = require("contentful");
  const client = contentful.createClient({
    space: "3nafpp0jo6h4",
    environment: "master", // defaults to 'master' if not set
    accessToken: "hsNzkIL8Lrero_6ljmPQHYT7gn9_0sho0Akw6R7tQ_s",
  });

  useEffect(() => {
    setIsLoading(true);
    client
      .getTags()
      .then((response) => {
        console.log(response.items);
        setTags(response.items);
        setIsLoading(false);
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
    );

  return (
    <div className="cuisine">
      <div className="cuisine-description row">
        NOT SURE WHAT YOU'RE LOOKING FOR? <br></br>
        Get inspired by our recipes from around the world
      </div>

      <div className="cuisine-tags">
        {tags?.map((tag) => {
          return (
            <div className="tag-div" key={tag.sys.id}>
              <div className="">
                <Link to={`/cuisine/${tag.sys.id}`}>
                  <button className="tag-button btn m-3">{tag.name}</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <img
        className="cuisine-img"
        src="https://svgsilh.com/svg/961700.svg"
        alt="recipes from around the world"
      ></img>

      <Helmet>
        <title>Cuisine - Easy Peasy</title>
        <meta name="find all recipes here" content="All easy peasy recipes" />
      </Helmet>
    </div>
  );
}
