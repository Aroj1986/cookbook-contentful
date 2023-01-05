import React from 'react'

function Register() {
  return (
    <div>
      <form className='login-form'>
        <div className='flex-row'>
        <p>First Name:</p>
        <input type='text' placeholder='first name'/>
        </div>
        <div className='flex-row'>
        <p>Last Name:</p>
        <input type='text' placeholder='last name'/>
        </div>
        <div className='flex-row'>
        <p>Address:</p>
        <input type='text' placeholder='Street name, house number'/>
        </div>
        <div className='flex-row'>
        <p>City:</p>
        <input type='text' placeholder='city name'/>
        </div>
        <div className='flex-row'>       
        <p>Postal Code:</p>
        <input type='text' placeholder='postal code'/>
        </div>
        <div className='flex-row'>
        <p>Country:</p>
        <input type='text' placeholder='country'/>
        </div>
        <div className='flex-row'>
        <p>Telephone (optional):</p>
        <input type='text' placeholder='+1234567890'/>
        </div>
        <div className='flex-row'>
        <p>Email:</p>
        <input type='text' placeholder='email address'/>
        </div>
        <button className='btn-all'>register</button>
      </form>
    </div>
  )
}

export default Register
