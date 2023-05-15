import React from 'react'

const FormSignup = () => {
  return (
    <div className="form-content-right">
        <div className="form">
            <h1>Get Started With ustoday! Create Your Accounts</h1>
            
            <div className="form-inputs">
                <label htmlFor='username' className="form-label">User Name</label>
                <input 
                id="username"
                type="text"
                name="username"
                className="form-input"
                placeholder="Enter your username"
                />
            </div>

            <div className="form-inputs">
                <label htmlFor='email' className="form-label">Email</label>
                <input 
                id="email"
                type="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
                />
            </div>

            <div className="form-inputs">
                <label htmlFor='password' className="form-label">Password</label>
                <input 
                id="password"
                type="password"
                name="password"
                className="form-input"
                placeholder="Enter your password"
                />
            </div>

            <div className="form-inputs">
                <label htmlFor='password2' className="form-label">Confirm Password</label>
                <input 
                id="password2"
                type="email"
                name="password2"
                className="form-input"
                placeholder="Enter your Confirm password"
                />
            </div>
            
        </div>
    </div>
  )
}

export default FormSignup