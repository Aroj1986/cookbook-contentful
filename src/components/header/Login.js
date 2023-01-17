import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'
import {Icon} from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import { useState } from 'react';
import { Helmet } from 'react-helmet'

function Login() {

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
        <title>Login - Easy Peasy</title>
        <meta name="Login - Easy Peasy" content="Login - Easy Peasy" />
      </Helmet>  
        <hr className='horizontal-line'/>
      <div className='login-container'>
        <h3>Login using</h3>
        <form method='POST'>
          <div className='form-group'>
            <input type="text" name='email' placeholder='Email' className='form-input'></input>
          </div>

          <div className='password-group'>
            <input type={type} name='password' placeholder='Password' minlength="8" maxlength="15" pattern="[a-zA-Z0-9]{8,15}" className='password-input'></input>
            <span onClick={handleToggle} className='password-icon'><Icon icon={icon} /></span>
          </div>

          <div className='remember-forgot'>
            <div>
              <input type="checkbox" name="agree-term"></input>
              <label for="agree-term">
                Remember me
              </label>
            </div>
            <div className='forgot-password'>
              <a href='#'>Forgot password?</a>
            </div>
          </div>

          <div className='form-group'>
            <input type="submit" name='submit' value="Login" className='form-submit'></input>
          </div>
          <div class="hr-sect"><h6>or</h6></div>
            <div className='social-media-login'>
              <div className='google-icon-field'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-google" viewBox="0 0 16 16">
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                </svg>
              </div>
              <input type="submit" name='submit' value="Login using Google" className='social-media-submit google-input-field'></input>
          </div>

          <div className='social-media-login'>
            <div className='facebook-icon-field'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>
            </div>
              <input type="submit" name='submit' value="Login using Facebook" className='social-media-submit facebook-input-field'></input>
          </div>
        </form>
        
        <a>Don't have an account yet ? </a>
        <div className='create-new'><a><NavLink to='/register'>Create new account</NavLink></a></div>
    </div>
    </>
  )
}

export default Login
