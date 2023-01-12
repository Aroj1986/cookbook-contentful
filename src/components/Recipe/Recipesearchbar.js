import {useState, useEffect} from "react";


export default function Recipesearchbar ({setRecipes}) {

    const [searchValue, setSearchValue] = useState("");


//call the Contentful-client to fetch the data
    const contentful = require("contentful");
    const client = contentful.createClient({
    space: "3nafpp0jo6h4",
    environment: "master", // defaults to 'master' if not set
    accessToken: "hsNzkIL8Lrero_6ljmPQHYT7gn9_0sho0Akw6R7tQ_s",
  });

  const getSearchResults = () => {
            // fetch for search
            client.getEntries({
                'content_type':"ourCookbook",
                'query': searchValue
                })
            .then((response) => {
                setRecipes(response.items);
                })
            .catch(console.error)
            .finally(() => {
                setSearchValue('');
            })
    }

      const getSearchValue = (e) => {
        console.log(e.target.value)
        setSearchValue(e.target.value)
      }

      const searchWithEnter = (e) => {
        console.log(e.key)
        if (e.key === 'Enter'){
            getSearchResults()
        };
      }



return(

        <div className="searchfield">
            <input aria-label="Search" className="searchinput" type="text" value={searchValue} placeholder="recipe, ingredient, ..." onChange={getSearchValue} onKeyDown={searchWithEnter}></input>
            <button className="searchbutton btn btn-secondary" onClick={getSearchResults}>Search</button>
        </div>
)
}