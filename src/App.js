import { useState } from 'react';
import './App.css';
import FormInput from "./components/FormInput";

function App() {
 const [values,setValues] = useState({
  username: "",
  email: "",
  birthday: "",
  password: "",
  confirmPassword: ""
 })

 const inputs =[
  {
    id :1,
    name:"username",
    type:"text",
    placeholder:"User Name",
    errorMessage:"User Name should be 3-16 characters and should't include any special charactres!",
    label: "User Name",
    pattern:"^[A-Za-z0-9]{3,16}$",
    required: true
  },
  {
    id :2,
    name:"email",
    type:"email",
    placeholder:"Email",
    errorMessage:"Should be valid Email Address !",
    label: "Email",
    required: true
  },
  {
    id :3,
    name:"birthday",
    type:"date",
    placeholder:"BirthDay",
    errorMessage:"",
    label: "Birth Day"
  },
  {
    id :4,
    name:"password",
    type:"password",
    placeholder:"Password",
    errorMessage:"Password should be 8-20 characters and include at least 1letter, 1 number and 1 special cheracters !",
    label: "Password",
    pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true
  },
  {
    id :5,
    name:"confirmpassword",
    type:"password",
    placeholder:"Confirm Password",
    errorMessage:"Password do not match !",
    label: "Confirm Password",
    pattern: values.password,
    required: true
  }
 ]
 

 const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("Form Data--->",values)
 }

 const onChange = (e) =>{
  setValues({ ...values, [e.target.name]: e.target.value});
 }

  return (
    <div className='app'>
      <form onSubmit={handleSubmit} autoComplete="off">
        <h1>REGISTER</h1>
        {console.log("111--->",inputs)}
          {inputs.map((input)=>(
            <FormInput key={input.id} 
            {...input} 
            value={values[input.name]} 
            onChange={onChange}  
            />
          ))}
          <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
