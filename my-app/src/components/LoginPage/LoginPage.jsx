import React from 'react'
import {Link} from 'react-router-dom'

import './LoginPage.css'

function LoginPage() {
    return (
        <div className = "login-page">
            <h1> Login </h1>
            <br></br>
            <h3> Username </h3>
            <input type="text" name="Username"/>
            <br></br>
            <h3> Password </h3>
            <input type="text" name="Password"/>
            <br></br>
            <br></br>
            <button type="button" className="login">
                <Link  className = "login-button" to = "/"> Login </Link>
            </button>
        </div>
    )
}

export default LoginPage