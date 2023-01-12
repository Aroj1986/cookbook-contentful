import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

export default function Recipedetail() {
  const [recipeDetail, setRecipeDetail] = useState("");
  const [recipeDetailImage, setRecipeDetailImage] = useState([]);

  const { id } = useParams();
  //   const params = useParams(); => now params.id can be used => {id} is destructuring naming for params.id
  const navigate = useNavigate();

  const contentful = require("contentful");
  const client = contentful.createClient({
    space: "3nafpp0jo6h4",
    environment: "master", // defaults to 'master' if not set
    accessToken: "hsNzkIL8Lrero_6ljmPQHYT7gn9_0sho0Akw6R7tQ_s",
  });

  useEffect(() => {
    // axios
    // .get(`https://cdn.contentful.com/spaces/3nafpp0jo6h4/environments/master/entries/${id}?access_token=hsNzkIL8Lrero_6ljmPQHYT7gn9_0sho0Akw6R7tQ_s`)
    // .then((response) => {
    // console.log(response.data);
    // setRecipeDetail(response.data)
    // })
    // .catch((err) => {
    // console.log(err);
    // });

    client
      .getEntry(id)
      .then((entry) => {
        setRecipeDetail(entry);
        setRecipeDetailImage(entry.fields.recipeImages);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="recipedetail container">
      <div className="row">
        {recipeDetailImage?.map((image) => {
          return (
            <div key={image.sys.id} className="col-4">
              <img
                src={image.fields?.file.url}
                alt={recipeDetail.fields?.recipeTitle}
                className="bigimage image margin-left"
              ></img>
            </div>
          );
        })}
        <div className="col-8">
          <div className="detailtitle lineheight margin-left-big margin-bottom1 bold text-with-shadow ">
            {recipeDetail.fields?.recipeTitle}
          </div>
          <div className="margin-left-big lineheight margin-bottom1">
            <span className="ratingstars">
              {Array(5)
                .fill()
                .map((_, i) => {
                  const ratingValue = i + 1;
                  if (ratingValue <= recipeDetail.fields?.recipeRating) {
                    return <span key={i}>★</span>;
                  } else {
                    return <span key={i}>☆</span>;
                  }
                })}
            </span>
            <span className="reviews margin-left-half small ">
              {recipeDetail.fields?.numberOfRatings} reviews
            </span>
          </div>
          <div className="margin-bottom1 margin-left-big">
            {recipeDetail.fields?.recipeDescriptionText}
          </div>
          <div className="margin-left-big">
            <span className="recipecolor">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </span>
            <span className=" small lineheight margin-left-half ">
              {recipeDetail.fields?.recipeAuthor}
            </span>
          </div>
          <div className="margin-left-big">
            <span className="recipecolor">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-calendar-heart"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5ZM1 14V4h14v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Zm7-6.507c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"
                />
              </svg>
            </span>
            <span className=" small lineheight margin-left-half">
              {recipeDetail.fields?.recipeCreated}
            </span>
          </div>

          <div className="margin-bottom1 margin-left-big">
            <span className="recipecolor">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-clock-history"
                viewBox="0 0 16 16"
              >
                <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
              </svg>
            </span>
            <span className=" small lineheight margin-left-half">
              {recipeDetail.fields?.recipeDuration} minutes
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="headingdetail margin-bottom1">Ingredients</div>
          <div className="wrap lineheight-big recipe-ingredients margin-left">
            {recipeDetail.fields?.recipeIngredients}
          </div>
        </div>
        <div className="col-6">
          <div className="headingdetail margin-bottom1">
            Cooking Instructions
          </div>
          <div className="wrap lineheight-big instruction margin-left">
            {recipeDetail.fields?.recipeDescription}
          </div>

          <Helmet>
            <title>{`${recipeDetail.fields?.recipeTitle} - Easy Peasy`}</title>
            <meta
              name="find all recipes here"
              content="All easy peasy recipes"
            />
          </Helmet>
        </div>
      </div>
      <div className="row back-btn">
        <Link onClick={() => navigate(-1)} className="textdecoration-none ">
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
