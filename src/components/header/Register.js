import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'
import {Icon} from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import { useState } from 'react';
import { Helmet } from 'react-helmet'

function Register() {

  const [type, setType] = useState('password')
  const [icon, setIcon] = useState(eyeOff)

  const handleToggle = (() => {
    if(type==='password'){
      setIcon(eye)
      setType('text')
    } else {
      setIcon(eyeOff)
      setType('password')
    }
  })

  return (
    
    <>
     <Helmet>
        <title>SignUp - Easy Peasy</title>
        <meta name="SignUp - Easy Peasy" content="SignUp - Easy Peasy" />
      </Helmet> 
    <hr className='horizontal-line'/>
      <div className='register-container'>
        <h3><b>CREATE ACCOUNT</b></h3>
        <form method='POST'>
          <div className='form-group'>
            <input type="text" name='name' placeholder='Full name' className='form-input'></input>
          </div>
          <div className='form-group'>
            <input type="text" name='email' placeholder='Email' className='form-input'></input>
          </div>
          <div className='password-group'>
            <input type={type} name='password' placeholder='Password' minlength="8" maxlength="15" pattern="[a-zA-Z0-9]{8,15}" required className='password-input'></input>
            <span onClick={handleToggle} className='password-icon'><Icon icon={icon} /></span>
          </div>
          <div className='password-group'>
            <input type={type} name='re_password' placeholder='Repeat password' required className='password-input'></input>
            <span onClick={handleToggle} className='password-icon'><Icon icon={icon} /></span>
          </div>
          <div className='checkbox'>
            <input type="checkbox" name="agree-term"></input>
            <label for="agree-term">
              I agree all statements in <a href='#'>Terms of service</a>
            </label>
          </div>
          <div className='form-group'>
            <input type="submit" name='submit' value="REGISTER" className='form-submit'></input>
          </div>
        </form>
        <p>Have already an account ? <NavLink to='/login'><b>Login here</b></NavLink></p>
      </div>
    </>
  )
}

export default Register
