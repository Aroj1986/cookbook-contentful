import React from 'react'

function Login() {
  return (
    <div>
      <form className='login-form'>
        <div className='flex-row'>
          <p>username</p>
          <input type='text' placeholder='username'/>
        </div>
        <div className='flex-row'>
          <p>password</p>
          <input type='text' placeholder='password'/>
        </div>
        <button className='btn-all'>login</button>
      </form>
    </div>
  )
}

export default Login
