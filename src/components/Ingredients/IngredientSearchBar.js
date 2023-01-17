import {useState, useEffect} from "react";
import './ingredients.css'

function IngredientSearchBar({setIngredientItems}) {

    const [inputIngredient, setInputIngredient] = useState("")

    //call the Contentful-client to fetch the data
    const contentful = require("contentful");
    const client = contentful.createClient({
        space: "3nafpp0jo6h4",
        environment: "master", // defaults to 'master' if not set
        accessToken: "hsNzkIL8Lrero_6ljmPQHYT7gn9_0sho0Akw6R7tQ_s",
    });

    // fetching data and variable for clicking search button
    const getSearchResults = () => {
        // fetch for search
        client.getEntries({
            'content_type':"ingredients",
            'query': inputIngredient
            })
        .then((response) => {
            setIngredientItems(response.items);
            setInputIngredient("")
            })
        .catch(console.error)
/*         .finally(() => {
            inputIngredient("");
        }) */
    }

    // for typing ingredient name
    const ingredientToSearch = (event) => {
        setInputIngredient(event.target.value)
        console.log(event.target.value)
    }
    
    // for pressing Enter key to search
    const searchWithEnter = (e) => {
        if (e.key === 'Enter'){
            getSearchResults()
        };
      }

        
  return (
    <div className="searchfield">
        <input aria-label="Search" className="search-input" type="text" value={inputIngredient} placeholder="ingredient" onChange={ingredientToSearch} onKeyDown={searchWithEnter}></input>
        <button className="search-button btn btn-secondary" onClick={getSearchResults}>Search</button>
    </div>
  )
}

export default IngredientSearchBar
