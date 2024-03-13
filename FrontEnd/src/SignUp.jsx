import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import Validation from "./SignUpValidation"; 
const SignUp = () => {
    const navigate=useNavigate();
       const[values,setValues]=useState({
        name:"",
        email:"",
        password:""
       });
       const handleInput=(e)=>{
        setValues(prev=>({...prev,[e.target.name]:[e.target.value]}));
       }
       const[errors,setErrors]=useState({});
       const handleSubmit=(e)=>{
        e.preventDefault();
      const er= Validation(values);
      setErrors(er);
      if(errors.name==="" && errors.email==="" && errors.password===""){
            axios.post('http://localhost:3000/signup',values).
            then(res=>
              {
                navigate('/');
              }).
            catch(err=>console.log(err));
      }

       }

  return (
    <div>
        <h1>SIGN_UP</h1>
      <form action="" onSubmit={handleSubmit}>
      <div>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Enter Name" onChange={handleInput} name='name' />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Enter Email" onChange={handleInput} name='email' />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter Password" onChange={handleInput} name='password'/>
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button>Sign Up</button>
        <Link to="/">Log In</Link>
      </form>
    </div>
  )
}

export default SignUp