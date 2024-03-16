import React from 'react'; // eslint-disable-line no-unused-vars
import './forms.css';
function login() {


  return (
    <div className="container">
      <h2 className='Title'>Login</h2>
      <form className='loginForm'>
        <div className="mb-3 inputs">
          <input type="email" className="form-control" id="inputEmail" placeholder='Your Email' aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3 inputs">
          <input type="password" className="form-control" id="inputPassword" placeholder='Your Password '/>
        </div>
        <div>
          <a id="forgotPassword" className="link-danger my-2" href='/'>Forgot Password?</a>
        </div>
        <button type="submit" className="btn btn-primary my-3" id='Btn'>Login</button>
        <div className="text-center registerLink">
          <p>Not a member? <a href="#!">Register</a></p>
        </div>
      </form>
    </div>
  )
}

export default login
