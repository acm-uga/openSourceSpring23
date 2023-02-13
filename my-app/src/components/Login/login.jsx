import React from 'react'

import "./login.css"

const login = () => {
  return (
    <div className="main-container">
        <div className='inner-container'>
            <form>
                <label htmlFor="email">Email</label><br />
                <input type="text" name='email' placeholder='John.Doe@example.com'/><br /><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" name="password"/><br /><br />
                <button type='submit'>Login</button>
                
            </form>
        </div>
    </div>
  )
}

export default login;