import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="cover">
      <h1>Welcome Back!</h1>
      <button className="loginButton" onClick={() => navigate("/Login")}>Go to Login Page</button>
      <button className="registrationButton" onClick={() => navigate("/Registration")}>Go to Registration Page</button>
    </div>


  )
}

export default Home