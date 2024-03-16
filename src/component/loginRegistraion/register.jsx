import React from 'react' // eslint-disable-line no-unused-vars
import './forms.css'

function register() {
  return (
    <div className="container">
      <h2 className='Title'>Register</h2>
      <form className='loginForm'>
        <div className="row">
            <div className="col-6">
                <input type="email" className="form-control" id="firstName" placeholder='First Name' aria-describedby="emailHelp"/>  
            </div>
            <div className="col-6">
                <input type="email" className="form-control" id="lastName" placeholder='Last Name' aria-describedby="emailHelp"/>  
            </div>
        </div>
        <div className="mb-3 inputs">
          <input type="email" className="form-control my-3" id="inputEmail" placeholder='Email' aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3 inputs">
          <input type="password" className="form-control my-3" id="inputPassword" placeholder='Password '/>
          <input type="password" className="form-control" id="confirmPassword" placeholder='Confirm Password '/>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label className="form-check-label" htmlFor="flexCheckChecked">
                I accept the <a href='/'>Terms of use</a> and <a href='/'>privacy policy</a>
            </label>
        </div>
        <button type="submit" className="btn btn-primary my-3" id='Btn'>Register</button>
      </form>
    </div>
  )
}

export default register
