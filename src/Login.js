import React from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

function Login() {

    const navigate = useNavigate();
    const SignUp=()=>{
        navigate('/register')

    };
    const clicklogin = ()=>{
        navigate('/')
    };

  return (
    <div className="wrapper1">
      <h1>Login</h1>
      <form className="entries">
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlForfor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <button  type="submit" onClick={clicklogin}>Login</button>
      </form>
      <div className="wrapper2">
      <p>Don't have an account?</p>
      <button  onClick={SignUp}>SignUP</button>
      </div>
    </div>
  );
}

export default Login;
