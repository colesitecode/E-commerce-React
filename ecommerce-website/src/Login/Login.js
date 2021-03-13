import '../Login/login.css'
import { Link, useHistory} from 'react-router-dom'
import React, { useState} from 'react'
import { auth } from '../Firebase_DB/firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  //Firebase -login database
  const signIn = e => {
    e.preventDefault()

    auth
    .signInWithEmailAndPassword(email,password)
    .then( auth => {
      history.push('/')
    })
    .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault()

    auth
      .createUserWithEmailAndPassword(email,password)
      .then((auth) => {
        // console.log(auth)
        //if successfully created a new user with email and password
        if (auth){
          history.push('/')
        }
      })
      .catch(error => alert(error.message))
  }
  //Firebase -login database

  return (
    
    <div className="login">
      <Link to="/">
      <img className="Login_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
      </Link>

      <div className="login_container">
        <h1>Sign in</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" value={email}
          onChange={e => setEmail(e.target.value)} />
          
          <h5>Password</h5>
          <input type="password" value={password}
          onChange={e => setPassword(e.target.value)} />

        <button type="submit" onClick={signIn} className="login_signInButton">
          Sign In
        </button>

        <p>
          By singing-in you agree to the amazon fake clone Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our Interes-Based Ads Notice.
        </p>

      <button onClick={register} className="login_registerButton">Create your Account</button>

        </form>
      </div>
    </div>
    
  )
}

export default Login
