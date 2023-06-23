import React from 'react'
import './main.css'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <div className='header'></div>
      <div className='side'>
        <div className='sidebar'></div>
        <div className='bars'>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='heading'>Welcome</div>
        <span className='buttons'>
            <Link to={'/signup'}><button>Register</button></Link>
            <Link to={'/login'}><button>Login</button></Link>
            
           
        </span>
        </div>
      </div>
    </div>
  )
}

export default Main