import React, { useState } from 'react'
import './FormInput.css'

const FormInput = (props) => {
    const [focused,setFocused] = useState(false)
    const {label, errorMessage, onChange, id, ...inputProps} = props;
  
    const handleFocus = () =>{
      setFocused(true)
    }
    
    return (
    <div className='formInput'>
        <label>{label}</label>
        {console.log("--->",errorMessage)}
        <input {...inputProps} 
        onChange={onChange} 
        onBlur={handleFocus} 
        onFocus={() => inputProps.name==="confirmPassword" && setFocused(true)} 
        focused={focused.toString()} />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput