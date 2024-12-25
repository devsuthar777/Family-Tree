import React, { useState } from 'react'
import createRegisterRequest from '../services/operations/user/createRegisterRequest';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/customActions.js/userActions';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const [errors,setErrors]=useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
      emailPhone:"",
      password:"",
    });
  
    const handleChange = (e) => {
      setFormData({...formData,[e.target.name]:e.target.value})
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = validate();
      if (Object.keys(validationErrors).length === 0) {
        console.log("Form submitted successfully:", formData);
        dispatch(loginUser({navigate,formData}));
      } else {
        setErrors(validationErrors);
      }
    }

    const validate = () => {
        let newErrors ={};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/; // Matches 10-digit phone numbers
    
        if (!formData.emailPhone) newErrors.emailPhone = "Email or Phone number is required"; 
        else if (!(emailRegex.test(formData.emailPhone) || phoneRegex.test(formData.emailPhone))) newErrors.emailPhone="Email or phone is invalid"
        
    
        if (!formData.password) newErrors.password = "Password is required";
        else if (formData.password.length < 8)
          newErrors.password = "Password must be at least 8 characters";
    
        return newErrors;
      };

  return (
    <div className='RegisterPage'>
        <h2>Let's go</h2>
        <form className='formDiv' onSubmit={handleSubmit}>

      <div className='inputDiv'>
        <input
          type="emailPhone"
          id="emailPhone"
          name="emailPhone"
          placeholder='Email or Phone no.'
          value={formData.emailPhone}
          onChange={handleChange}
        />
        {errors.emailPhone && <div className="error">{errors.emailPhone}</div>}
      </div>

      <div className='inputDiv'>
      
        <input
          type="password"
          id="password"
          name="password"
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <div className="error">{errors.password}</div>}
      </div>

      <button type="submit">Sign In</button>
    </form>
    </div>
  )
}

export default LoginPage