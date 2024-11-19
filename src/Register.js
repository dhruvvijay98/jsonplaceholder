import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const clicksubmit = ()=>{
        navigate('/')
    };
    const clickcancel = ()=>{
        navigate('/')
    };

  return (
    <div>
      <h1>User Registration</h1>
      <form action="#">
        <div>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            id="name"
            name="Name"
            placeholder="Enter your Name"
          />
        </div>
        <div>
          <label htmlFor="Phone">Phone No.</label>
          <input
            type="Number"
            id="Phone"
            name="Phone no."
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your Email ID"
          />
        </div>
        <div>
          <label htmlFor="password">Email</label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Enter your Password"
          />
        </div>
        <div>
            <button type="submit" onClick={clicksubmit}>Submit</button>
            <button typeof="submit" onClick={clickcancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
