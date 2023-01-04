import React from 'react'
import { NavLink} from 'react-router-dom';
import './header.css'

function Header() {
  return (
    <div className='container-header'>
      <ul className='items-header'>
        <NavLink to="/home" className='items-navbar'>Home</NavLink> |
        <NavLink to="/all-recipes" className='items-navbar'>All Recipes</NavLink> |
        <NavLink to="/ingredients" className='items-navbar'>Ingredients</NavLink> |
        <NavLink to="/cuisine" className='items-navbar'>Cuisine</NavLink>
      </ul>
      <ul className='login-header'>
        <NavLink to="/register" className='items-navbar'>Register</NavLink> |
        <NavLink to="/login" className='items-navbar'>Login</NavLink>
      </ul>
    </div>
  )
}

export default Header
