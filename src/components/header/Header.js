import React from 'react'
import { NavLink} from 'react-router-dom';

function Header() {
  return (
    <>
    <h1 className="title text-with-shadow">Easy Peasy Recipes</h1>
    <div className='container-header'>
      <ul className='items-header'>
        <NavLink to="/home" className='items-navbar textdecoration-none'>Home</NavLink> |
        <NavLink to="/recipes" className='items-navbar textdecoration-none'>All Recipes</NavLink> |
        <NavLink to="/ingredients" className='items-navbar textdecoration-none'>Ingredients</NavLink> |
        <NavLink to="/cuisine" className='items-navbar textdecoration-none'>Cuisine</NavLink>
      </ul>
      <ul className='login-header'>
        <NavLink to="/register" className='items-navbar textdecoration-none'>Register</NavLink> |
        <NavLink to="/login" className='items-navbar textdecoration-none'>Login</NavLink>
      </ul>
    </div>
    </>
  )
}

export default Header
