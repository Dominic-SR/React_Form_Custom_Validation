import React from 'react'
import FormSignup from './FormSignup'
import "./Form.css"

const Form = () => {
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>x</span>
          <div className='form-content-left'>
             <img src='https://img.icons8.com/?size=512&id=bzf0DqjXFHIW&format=png' alt='left' className='form-img' />
          </div>
          <FormSignup />
      </div>
    </>
  )
}

export default Form