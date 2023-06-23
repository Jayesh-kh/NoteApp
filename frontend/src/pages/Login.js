import React, {useState} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";


  
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'http://localhost:8080/api/v1/auth/login',
        {
          username,
          password,
        }
      );
      console.log(res)
      if (res && res.data.success) {
        toast.success(res && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));

        navigate( "/addNote");
      } else {
        toast.error(res.data.message);
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
        <div className='bars'>
        <form onSubmit={handleLogin}>
        <div className='bars'>
        <input
          type="text"
          placeholder="Username"
          value={username}
          className='inputbox'
          onChange={(e) => setUsername(e.target.value)}
        />
       
        <input
          type="password"
          placeholder="Password"
          value={password}
          className='inputbox'
          onChange={(e) => setPassword(e.target.value)}
        />
         
      
          <button type="submit" className='button' >
            Login
          </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Login
