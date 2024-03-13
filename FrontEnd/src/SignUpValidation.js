function Validation(values){
    let error={}
    const email_pattern= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    
    if(values.name===""){
        error.name="Name should not be empty"
    }
    
    else{
        error.name=""
    }
    if(values.email===""){
        error.email="Name should not be empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email="Email dint match"
    }
    else{
        error.email=""
    }
    if(values.password===""){
        error.password="password should not be empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password="password dint match"
    }
    else{
        error.password=""
    }
    return error;
    
}
export default Validation;