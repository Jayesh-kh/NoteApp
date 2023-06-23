import React, {useState} from 'react'
import './signup.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast"

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate =useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post(
        'http://localhost:8080/api/v1/auth/register',
        {
          username,
          email,
          password
         
        }
      );
       //console.log(response);
    
    if (response && response.data.success) {
      toast.success(response && response.data.message);
      navigate("/login");
    } else {
      console.log('somthing wrong')
      toast.error(response.data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
  };
  return (
    <div>
      <div className='header'></div>
      <div className='side'>
        <div className='sidebar'></div>
        <form onSubmit={handleSignup}>
        <div className='bars'>
        <input
          type="text"
          placeholder="Username"
          value={username}
          className='inputbox'
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          className='inputbox'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className='inputbox'
          onChange={(e) => setPassword(e.target.value)}
        />
         
      
          <button type="submit" className='button' >
            SignUp
          </button>
          </div>
        </form>
        </div>
      </div>
    
  )
}

export default SignUp
