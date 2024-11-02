import React,{useState} from 'react';
import './LoginSignup.css';
import {Link,useNavigate} from 'react-router-dom';
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import axios from 'axios';
import password_icon from '../Assets/password.png'
const LoginSignup = () => {
  const [data,setData] = useState({
      firstName:"",
      lastName:"",
      email:"",
      password:"",
  });
  const [error,setError]=useState("");
  const navigate =useNavigate();

  const handleChange =({currentTarget:input})=>{
    setData({...data,[input.name]:input.value});
  };
  const [action,setAction]= useState("Sign Up");

  const handleSubmit =async(e)=>{
    e.preventDefault();
    try {
      const url ="http://localhost:5000/api/users";
      const {data: res}= await axios.post(url,data);
      navigate("/login");
      console.log(res.messsage);

    } catch (error) {
      if(error.response && 
        error.response.status>=400&&
      error.response.status<=500){
      setError(error.response.data.messsage);
    }
  }
  }
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
          <div className="underline"></div> 
      </div>
      <div className="inputs" onSubmit={handleSubmit}>
        {action==="Login"?<div></div>: <><div className="input">
          <img src={user_icon} alt="" />
          <input
           type="text"
           placeholder="first name" 
           name='firstName' 
           onChange={handleChange}
           value={data.firstName} 
           required 
           className="inputdata"/>
        </div><div className="input">
            <img src={user_icon} alt="" />
            <input
             type="text"
              placeholder="last name"
              name='lastName'
              onChange={handleChange}
              value={data.lastName} 
              required 
              className="inputdata" />
          </div></>}
       
        <div className="input">
          <img src={email_icon}alt="" />
          <input type="email"
            placeholder="Email Id"
            name='email'
            onChange={handleChange}
            value={data.email} 
            required 
            className="inputdata" />
        </div>
        <div className="input">
          <img src={password_icon}alt="" />
          <input type="password" placeholder="Password"
          name='password'
          onChange={handleChange}
          value={data.password} 
          required 
          className="inputdata"/>
        </div>
      </div>
      {error && <div className="error_msg">{error}</div>}
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here</span></div>}
      <div className="submit-container">
        <div className={action==="Login"? "submit gray" :"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":" submit"} onClick={()=>{setAction("Login")}}>Login</div> 
      </div>
    </div>
  )
}

export default LoginSignup
