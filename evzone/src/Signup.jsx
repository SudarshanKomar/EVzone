import React, { useState }  from 'react'
import {NavLink, useNavigate} from 'react-router-dom';
import './Signup.css'




const Signup = () => {
  const navigate = useNavigate();

  const [formData , setFormData] = useState({
    signname:'',
    email:'',
    password:'',
    cnfpass:''

  })

  const [errors ,setErrors] = useState({})

  const handleChange = (e) =>{
    const {name,value} =e.target;
    setFormData({
      ...formData,[name] : value
    })
  }

  const handleSubmit =async (e) =>{
    e.preventDefault()

    try {
      const response=await fetch("http://localhost:5000/",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(formData),
    });
    console.log(response);
    } catch (error) {
      console.log("register",error);
      
    }
    const validationErrors={}
    if(!formData.signname.trim()){
      validationErrors.signname="name is required"
    }
    if(!formData.email.trim()){
      validationErrors.email="email is required"}
    // else if(/^[^\s@]+@[^\s@]+\.[^\s@]/.test(formData.email)){
    //    validationErrors.email="email is not valid"
    //  }

    if(!formData.password.trim()){
      validationErrors.password="password is required"
    }else if(formData.password.length < 6){
      validationErrors.password="password should be at least 6 char"
    }

    if(formData.cnfpass !== formData.password){
      validationErrors.cnfpass= "password not matched"
    }

    setErrors(validationErrors)

     if(Object.keys(validationErrors).length ===0){
      navigate('/Login');
      
     }


  }

  return (
    <>
    <body className='signbody'>
    <div className="signnavbar">
        EV ZONE
    </div>
    <div className="signcontainer">
        
        <div className="signbox1">
            
        </div>
    <form name="myform" method='POST' action="/Login" onSubmit={handleSubmit}>
        <div className="signcontents">
            <h2>Fill Your Details Here</h2><hr />
            <label for="signname">First Name:</label><br />
            <input type="text" id="signname" name='signname'  placeholder="FirstName" onChange={handleChange} required /><br />
            {errors.signname && <span>{errors.signname}</span>}<br />
            <label for="signLastName">Last Name:</label><br />
            <input type="text" id="signLastName" name='signlastname' placeholder="LastName" /><br />
            <label for="email">Your Email:</label><br />
            <input type="email" id="email" name='email' onChange={handleChange} placeholder="eg.abc@gmail.com" /><br />
            {errors.email && <span>{errors.email}</span>}<br />
            <label for="contact">Contact No.:</label><br />
            <input type="text" id="contact" name="number" minlength="10" maxlength="10" placeholder="Enter 10 digit mobile no." required /><br />
            <label for="password">Password:</label><br />
            <input type="password" id="password" name='password' onChange={handleChange} required/><br />
            {errors.password && <span>{errors.password}</span>}<br />
            <label for="cnfpass">Confirm Password:</label><br />
            <input type="password" id="cnfpass" name='cnfpass' onChange={handleChange} /><br />
            {errors.cnfpass && <span>{errors.cnfpass}</span>}<br />
            <button type="submit" onsubmit="" id="signsubmit">Sign up</button>

            <p>already have an account?<NavLink to="/Login">Log in</NavLink></p>

            
        </div>
    </form>
    </div>
    <script src='Validate.js'></script>
    </body>
    </>
  )
}

export default Signup;