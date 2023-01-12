import React, { useEffect, useState } from 'react'
import './ingredients.css'

// https://cdn.contentful.com/spaces/3nafpp0jo6h4/environments/master/entries?access_token=3I8lW_L0QpggHL-KfMPiTfCKR425Btwa3nTLelozRsI
function Ingredients() {

    const [ingredientItems, setIngredientItems] = useState([])
    const [query, setQuery] = useState("")

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
    }, [])
      
      // for typing ingredient name
      const [inputIngredient, setInputIngredient] = useState("")
      const [filterLetter, setFilterLetter] = useState("")
      const ingredientToSearch = (event) => {
        setInputIngredient(event.target.value)
        console.log(event.target.value)
    }

    // for clicking search button
    const searchHandleClick = (e) => {
        if(!inputIngredient){
            return alert("No results found for empty keywords");
        } else {
            setQuery(inputIngredient)
            console.log(`Button clicked to search ingredient ${inputIngredient}`)
            setInputIngredient("")
        }
    }

    // for clicking alphabet NavList
    const handleAlphabet = event => {
     console.log(event.target.innerText)
     setFilterLetter(event.target.innerText) 
    }
    const filteredIngredients = ingredientItems.filter((currentIngredient) => {
      if (currentIngredient.fields.ingredientName['0'] === filterLetter) {return currentIngredient.fields.ingredientName}
  })
    
  return (
    <>
      <div  className="alpha_list">
        <a href="/ingredients#A" onClick={handleAlphabet}>A</a> &nbsp; 
        <a href="/ingredients#B" onClick={handleAlphabet}>B</a> &nbsp; 
        <a href="/ingredients#C" onClick={handleAlphabet}>C</a> &nbsp; 
        <a href="/ingredients#C" onClick={handleAlphabet}>D</a> &nbsp; 
        <a href="/ingredients#E" onClick={handleAlphabet}>E</a> &nbsp; 
        <a href="/ingredients#C" onClick={handleAlphabet}>F</a> &nbsp;
        <a href="/ingredients#G" onClick={handleAlphabet}>G</a> &nbsp; 
        <a href="/ingredients#H" onClick={handleAlphabet}>H</a> &nbsp; 
        <a href="/ingredients#C" onClick={handleAlphabet}>I</a> &nbsp;
        <a href="/ingredients#C" onClick={handleAlphabet}>J</a> &nbsp;
        <a href="/ingredients#K" onClick={handleAlphabet}>K</a> &nbsp; 
        <a href="/ingredients#L" onClick={handleAlphabet}>L</a> &nbsp; 
        <a href="/ingredients#M" onClick={handleAlphabet}>M</a> &nbsp; 
        <a href="/ingredients#C" onClick={handleAlphabet}>K</a> &nbsp; 
        <a href="/ingredients#O" onClick={handleAlphabet}>O</a> &nbsp; 
        <a href="/ingredients#P" onClick={handleAlphabet}>P</a> &nbsp; 
        <a href="/ingredients#C" onClick={handleAlphabet}>L</a> &nbsp;
        <a href="/ingredients#R" onClick={handleAlphabet}>R</a> &nbsp; 
        <a href="/ingredients#S" onClick={handleAlphabet}>S</a> &nbsp; 
        <a href="/ingredients#T" onClick={handleAlphabet}>T</a> &nbsp; 
        <a href="/ingredients#C" onClick={handleAlphabet}>U</a> &nbsp;
        <a href="/ingredients#C" onClick={handleAlphabet}>V</a> &nbsp;
        <a href="/ingredients#W" onClick={handleAlphabet}>W</a> &nbsp; 
        <a href="/ingredients#C" onClick={handleAlphabet}>X</a> &nbsp;
        <a href="/ingredients#Y" onClick={handleAlphabet}>Y</a> &nbsp; 
        <a href="/ingredients#Z" onClick={handleAlphabet}>Z</a> &nbsp;
      </div>
        
       <div className='search-form'>
        <form>
            <input 
            type='text' 
            placeholder='search ingredient'
            value={inputIngredient}
            onChange={ingredientToSearch}
            ></input>
        </form>
        <button className='search-button' onClick={searchHandleClick}>Search</button>
      </div> 

      <div className='ingredients'>
        {filteredIngredients.length === 0 && <div><h2 className="no-items-found">No items found!</h2></div>}
        {filteredIngredients.map((ingredient) => {
          return (
            <div className="card-container" key={ingredient.sys.id}>
                <img src={ingredient.fields.ingredientImage.fields.file.url} key={ingredient.fields.ingredientImage.sys.id} style={{ width: 150, height: 150 }} alt={"ingredient image"}></img>
                <a className='card-caption' href={ingredient.fields.ingredientImage.fields.file.url} target='_blank'>{ingredient.fields.ingredientName}</a>
            </div>
          )
        })}
      </div>

      <div className='ingredients'>
        {ingredientItems.map((ingredient) => {
          return (
            <div className="card-container" key={ingredient.sys.id}>
                <img src={ingredient.fields.ingredientImage.fields.file.url} key={ingredient.fields.ingredientImage.sys.id} style={{ width: 150, height: 150 }} alt={"ingredient image"}></img>
                <a className='card-caption' href={ingredient.fields.ingredientImage.fields.file.url} target='_blank'>{ingredient.fields.ingredientName}</a>
            </div>
          )
        })}
      </div>
    </>

  )
}

export default Ingredients

