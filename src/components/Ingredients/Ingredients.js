import React, { useEffect, useState } from "react";
import "./ingredients.css";
import { Helmet } from "react-helmet";

// https://www.foodhero.org/ingredients
// https://cdn.contentful.com/spaces/3nafpp0jo6h4/environments/master/entries?access_token=3I8lW_L0QpggHL-KfMPiTfCKR425Btwa3nTLelozRsI
function Ingredients() {
  const contentful = require("contentful");
  const client = contentful.createClient({
    space: "3nafpp0jo6h4",
    environment: "master", // defaults to 'master' if not set
    accessToken: "3I8lW_L0QpggHL-KfMPiTfCKR425Btwa3nTLelozRsI",
  });

  // to fetch data from contentful
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    client
      .getEntries({
        content_type: "ingredients",
      })
      .then((response) => {
        console.log(response.items);
        setIngredients(response.items);
      });
  }, []);

  // to adjust searched/typed ingredient name
  const [typeIngredient, setTypeIngredient] = useState("");
  const ingredientToSearch = (event) => {
    setTypeIngredient(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <div class="alpha_list">
        <a href="/ingredients#A">A</a> &nbsp;
        <a href="/ingredients#B">B</a> &nbsp;
        <a href="/ingredients#C">C</a> &nbsp;
        <a href="/ingredients#C">D</a> &nbsp;
        <a href="/ingredients#E">E</a> &nbsp;
        <a href="/ingredients#C">F</a> &nbsp;
        <a href="/ingredients#G">G</a> &nbsp;
        <a href="/ingredients#H">H</a> &nbsp;
        <a href="/ingredients#C">I</a> &nbsp;
        <a href="/ingredients#C">J</a> &nbsp;
        <a href="/ingredients#K">K</a> &nbsp;
        <a href="/ingredients#L">L</a> &nbsp;
        <a href="/ingredients#M">M</a> &nbsp;
        <a href="/ingredients#C">K</a> &nbsp;
        <a href="/ingredients#O">O</a> &nbsp;
        <a href="/ingredients#P">P</a> &nbsp;
        <a href="/ingredients#C">L</a> &nbsp;
        <a href="/ingredients#R">R</a> &nbsp;
        <a href="/ingredients#S">S</a> &nbsp;
        <a href="/ingredients#T">T</a> &nbsp;
        <a href="/ingredients#C">U</a> &nbsp;
        <a href="/ingredients#C">V</a> &nbsp;
        <a href="/ingredients#W">W</a> &nbsp;
        <a href="/ingredients#C">X</a> &nbsp;
        <a href="/ingredients#Y">Y</a> &nbsp;
        <span class="nolink">Z</span>
      </div>
      <div className="search-form">
        <form>
          <input
            type="text"
            placeholder="search ingredient"
            value={typeIngredient}
            onChange={ingredientToSearch}
          ></input>
          <button>Search</button>
        </form>
      </div>
      <div className="ingredients">
        {ingredients.map((ingredient) => {
          return (
            <div className="card-container" key={ingredient.sys.id}>
              <img
                src={ingredient.fields.ingredientImage.fields.file.url}
                key={ingredient.fields.ingredientImage.sys.id}
                style={{ width: 150, height: 150 }}
              ></img>
              <a
                className="card-caption"
                href={ingredient.fields.ingredientImage.fields.file.url}
                target="_blank"
              >
                {ingredient.fields.ingredientName}
              </a>
            </div>
          );
        })}
      </div>
      <Helmet>
        <title>Ingredients - Easy Peasy</title>
        <meta name="find all ingredients here" content="All ingredients" />
      </Helmet>
    </>
  );
}

export default Ingredients;
