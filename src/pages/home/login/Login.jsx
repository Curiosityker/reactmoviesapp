import React from 'react'
import './style.scss'
function Login() {
  return (
    <>
    <form className='main'>
      <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-4">
    <label  className="form-label1">Password</label>
    <input type="password" className="form-control1" id="exampleInputPassword1"/>
  </div>
  <div className="btn-primary"><button type="submit" className='btn' >LOGIN</button></div>
 
  </form>
      
    </>
  )
}

export default Login
