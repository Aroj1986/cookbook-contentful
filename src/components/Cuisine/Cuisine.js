import React from 'react';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


export default function Cuisine() {

  const [tags, setTags] = useState([])

   //call the Contentful-client to fetch the data
   const contentful = require("contentful");
   const client = contentful.createClient({
     space: "3nafpp0jo6h4",
     environment: "master", // defaults to 'master' if not set
     accessToken: "hsNzkIL8Lrero_6ljmPQHYT7gn9_0sho0Akw6R7tQ_s",
   });
 
   useEffect(() => {
     client
       .getTags()
       .then((response) => {
         console.log(response.items)
         setTags(response.items);
       })
       .catch(console.error);
   }, []);


   
  return (
    <div className="cuisine">
    <div className="cuisine-description row">Not sure what to look for in detail? <br></br>
      Get inspired by our categories
    </div>
    <div className="cuisine-tags">
      {tags?.map((tag) => {
        return(
          <div className="tag-div" key={tag.sys.id} >
            <div className="">
              <Link to={`/cuisine/${tag.sys.id}`}>
              <button className="tag-button btn btn-outline-secondary m-3">{tag.name}</button>
              </Link>
              </div>
            
            </div>
        )
      })}
    </div>

    <Helmet>
    <title>Cuisine - Easy Peasy</title>
    <meta
      name="find all recipes here"
      content="All easy peasy recipes"
    />
    </Helmet>
    </div>
  )
}