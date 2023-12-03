import React from 'react'

const RegValidate = (values) => {

     const error={}

    const emailPattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passPattern=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if(!emailPattern.test(values.user_email)){
        error.user_email="Not Correct Email "
      }
    if(!passPattern.test(values.user_password)){ 
       error.user_password="Minimum eight characters, at least one letter, one number and one special character";
    }else 
    if((values.user_confirmpassword) !== (values.user_password)){ 
       error.user_confirmpassword="Password Doesn't match ";
    
    }

  return  error;

  
}

export default RegValidate;