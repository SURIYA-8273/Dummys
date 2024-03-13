import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";
import axios from "axios";
const Login = () => {
    const navigate=useNavigate();
    const[values,setValues]=useState({
        email:"",
        password:""
    });
    const[errors,setErrors]=useState({});
    const handleInput=(e)=>{
        setValues(prev=>({...prev,[e.target.name]:[e.target.value]}));
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setErrors(Validation(values));
        if( errors.email==="" && errors.password===""){
            axios.post('http://localhost:3000/login',values).
            then(res=>
              {
                if(res.data==="success"){
                    navigate('/home');
                }
                else{
                    alert("no record");
                }
              }).
            catch(err=>console.log(err));
      }
    }
  return (
    <div>
        <h1>SIGN_IN</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Enter Email" name="email" onChange={handleInput} />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter Password" name="password" onChange={handleInput} />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button type="submit">Log In</button>
        <Link to="/signup">Create Account</Link>
      </form>
    </div>
  );
};

export default Login;
