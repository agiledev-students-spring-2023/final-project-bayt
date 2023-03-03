// Login Page

import React from 'react';

import "../css/Login.css";

// TODOS:
// 1. Have error message appear in p tag if receive 400s or 500s from backend.
// 2. Username input field retains the value user just entered if something went wrong (backend issues, wrong housecode, etc.).

function Login(props) {
    return (
        <div id='outer'>
            <div className='logoContainer'>
                <div className='logo'>
                    <p>LOGO</p>
                </div>
            </div>

            <div className='inputArea'>
                <input id='usernameInput' type="text" name='username' placeholder='USERNAME'/>
                <input id='passwordInput' type="password" name='housecode' placeholder='HOUSE CODE' />
                <input id='loginBtn' type="submit" value='Login' />
            </div>

            <div className='signupArea'>
                <button id='signupBtn'>Sign Up</button>
            </div>

            <footer className='loginFooter'>
                <h6>© 2023 Bayt</h6>
            </footer>
        </div>
    );
}

export default Login;