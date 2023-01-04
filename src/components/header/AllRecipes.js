import React from 'react'
import { NavLink} from 'react-router-dom';
import './header.css'

function AllRecipes() {
  return (
    <div>
      <form className='search-form'>
        <input type='text' placeholder='search recipe'/>
        <button >search</button>
      </form>
      <h1>List of Available Recipes</h1>
      <ol className='flex-column'>
        <li>Recipe 1</li>
        <img className='img-home' src='https://img.chefkoch-cdn.de/rezepte/444191136558888/bilder/1251935/crop-960x720/new-york-club-sandwich.jpg'></img>
        <button><NavLink to="/ingredients">view more</NavLink></button>
      </ol>
    </div>
  )
}

export default AllRecipes
