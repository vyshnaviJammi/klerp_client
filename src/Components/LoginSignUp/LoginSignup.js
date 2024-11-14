import React, { useState } from 'react';
import './LoginSignup.css';
import { useNavigate } from 'react-router-dom';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import axios from 'axios';

const LoginSignup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [action, setAction] = useState("Sign Up");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = action === "Sign Up"
        ? "http://localhost:5000/api/auth/register"
        : "http://localhost:5000/api/auth/login";
      const { data: res } = await axios.post(url, data);
      
      if (action === "Sign Up") {
        navigate("/login");
      } else {
        localStorage.setItem('token', res.token);
        navigate("/Welcome");
      }

      console.log(res.message);
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <form className="inputs" onSubmit={handleSubmit}>
        {action === "Login" ? null : (
          <>
            <div className="input">
              <img src={user_icon} alt="User Icon" />
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                value={data.firstName}
                required
                className="inputdata"
              />
            </div>
            <div className="input">
              <img src={user_icon} alt="User Icon" />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
                value={data.lastName}
                required
                className="inputdata"
              />
            </div>
          </>
        )}
        <div className="input">
          <img src={email_icon} alt="Email Icon" />
          <input
            type="email"
            placeholder="Email Id"
            name="email"
            onChange={handleChange}
            value={data.email}
            required
            className="inputdata"
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="Password Icon" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={data.password}
            required
            className="inputdata"
          />
        </div>
        <button type="submit" className="submit">{action}</button>
      </form>
      {error && <div className="error_msg">{error}</div>}
      {action === "Sign Up" ? null : (
        <div className="forgot-password">Lost Password? <span>Click Here</span></div>
      )}
      <div className="submit-container">
        {action === "Login" ? (
          <div
            className="link-text"
            onClick={() => setAction("Sign Up")}
          >
            Don't have an account? Sign Up
          </div>
        ) : (
          <div
            className="link-text"
            onClick={() => setAction("Login")}
          >
            Already have an account? Login
          </div>
        )}
        {localStorage.getItem('token') && (
          <button onClick={handleLogout} className="logout-button">Logout</button>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
