import React, { useEffect, useState } from 'react'
import './ingredients.css'
import { Helmet } from "react-helmet";
import IngredientSearchBar from './IngredientSearchBar';

// https://cdn.contentful.com/spaces/3nafpp0jo6h4/environments/master/entries?access_token=3I8lW_L0QpggHL-KfMPiTfCKR425Btwa3nTLelozRsI
function Ingredients() {

  const [ingredientItems, setIngredientItems] = useState([])
  const [filterLetter, setFilterLetter] = useState("")

  const contentful = require("contentful")
  const client = contentful.createClient({
    space: "3nafpp0jo6h4",
    environment: "master", // defaults to 'master' if not set
    accessToken: "3I8lW_L0QpggHL-KfMPiTfCKR425Btwa3nTLelozRsI",
  });

  useEffect(() => {
    client.getEntries({
      content_type: "ingredients"
    })
    .then((response) => {
      console.log(response.items)
      setIngredientItems(response.items)
    })
  }, [filterLetter])

  // for clicking alphabet NavList
  const handleAlphabet = event => {
    console.log(event.target.innerText)
    setFilterLetter(event.target.innerText)
    filterLetter("")
  }

  const filteredIngredients = ingredientItems.filter((currentIngredient) => {
    if (currentIngredient.fields.ingredientName['0'] === filterLetter) {return currentIngredient.fields.ingredientName}
  })
      
  return (
    <>
      <Helmet>
        <title>Ingredients - Easy Peasy</title>
        <meta name="find all ingredients here" content="All ingredients" />
      </Helmet>
      <div  className="alpha_list">
        <a href="/ingredients#A" onClick={handleAlphabet}>A</a> &nbsp; 
        <a href="/ingredients#B" onClick={handleAlphabet}>B</a> &nbsp; 
        <a href="/ingredients#C" onClick={handleAlphabet}>C</a> &nbsp; 
        <a href="/ingredients#D" onClick={handleAlphabet}>D</a> &nbsp; 
        <a href="/ingredients#E" onClick={handleAlphabet}>E</a> &nbsp; 
        <a href="/ingredients#F" onClick={handleAlphabet}>F</a> &nbsp;
        <a href="/ingredients#G" onClick={handleAlphabet}>G</a> &nbsp; 
        <a href="/ingredients#H" onClick={handleAlphabet}>H</a> &nbsp; 
        <a href="/ingredients#I" onClick={handleAlphabet}>I</a> &nbsp;
        <a href="/ingredients#J" onClick={handleAlphabet}>J</a> &nbsp;
        <a href="/ingredients#K" onClick={handleAlphabet}>K</a> &nbsp; 
        <a href="/ingredients#L" onClick={handleAlphabet}>L</a> &nbsp; 
        <a href="/ingredients#M" onClick={handleAlphabet}>M</a> &nbsp; 
        <a href="/ingredients#N" onClick={handleAlphabet}>N</a> &nbsp; 
        <a href="/ingredients#O" onClick={handleAlphabet}>O</a> &nbsp; 
        <a href="/ingredients#P" onClick={handleAlphabet}>P</a> &nbsp; 
        <a href="/ingredients#Q" onClick={handleAlphabet}>Q</a> &nbsp;
        <a href="/ingredients#R" onClick={handleAlphabet}>R</a> &nbsp; 
        <a href="/ingredients#S" onClick={handleAlphabet}>S</a> &nbsp; 
        <a href="/ingredients#T" onClick={handleAlphabet}>T</a> &nbsp; 
        <a href="/ingredients#U" onClick={handleAlphabet}>U</a> &nbsp;
        <a href="/ingredients#V" onClick={handleAlphabet}>V</a> &nbsp;
        <a href="/ingredients#W" onClick={handleAlphabet}>W</a> &nbsp; 
        <a href="/ingredients#X" onClick={handleAlphabet}>X</a> &nbsp;
        <a href="/ingredients#Y" onClick={handleAlphabet}>Y</a> &nbsp; 
        <a href="/ingredients#Z" onClick={handleAlphabet}>Z</a> &nbsp;
      </div>
      
      <IngredientSearchBar setIngredientItems={setIngredientItems} /> 

      {filteredIngredients.length ? (
      <div className='ingredients'>
        {filteredIngredients.map((ingredient) => {
          return (
            <div className="card-container" key={ingredient.sys.id}>
                <a href={ingredient.fields.ingredientImage.fields.file.url} target='_blank'>
                  <img src={ingredient.fields.ingredientImage.fields.file.url} key={ingredient.fields.ingredientImage.sys.id} style={{ width: 140, height: 140 }} alt={"ingredient image"} className="image-ingredient"></img></a>
                <p className='card-caption'>{ingredient.fields.ingredientName}</p>
            </div>
          )
        })}
      </div>) : 

      (<div>
        <h6 className="no-items-found">Ingredient with alphabet "{filterLetter}"</h6>
        <div className='ingredients'>
          {ingredientItems.map((ingredient) => {
            return (
              <div className="card-container" key={ingredient.sys.id}>
                  <a href={ingredient.fields.ingredientImage.fields.file.url} target='_blank'>
                    <img src={ingredient.fields.ingredientImage.fields.file.url} key={ingredient.fields.ingredientImage.sys.id} style={{ width: 140, height: 140 }} alt={"ingredient image"} className="image-ingredient"></img></a>
                  <p className='card-caption'>{ingredient.fields.ingredientName}</p>
              </div>
            )
          })}
        </div>
      </div>
      )
      }
    </>
  )
}

export default Ingredients