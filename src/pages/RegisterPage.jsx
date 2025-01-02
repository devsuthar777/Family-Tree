import React, { useState } from 'react'
import '../assets/styles/user.css'
import createRegisterRequest from '../services/operations/user/createRegisterRequest';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createRegReq } from '../redux/customActions.js/userActions';

const RegisterPage = () => {

  const [errors,setErrors]=useState({});
  const {peopleList,error,loading} =  useSelector(state => state.user);
  const dispatch = useDispatch();

  const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    emailPhone:"",
    password:"",
    confirmPassword:""


  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      
      dispatch(createRegReq({navigate,formData}));


    } else {
      setErrors(validationErrors);
    }
  }

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "Name is required";
    else if (formData.firstName.length < 2) newErrors.firstName = "Name must be at least 2 characters";

    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    else if (formData.lastName.length < 2) newErrors.lastName = "Last Name must be at least 2 characters";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/; // Matches 10-digit phone numbers

    if (!formData.emailPhone) newErrors.emailPhone = "Email or Phone number is required"; 
    else if (!(emailRegex.test(formData.emailPhone) || phoneRegex.test(formData.emailPhone))) newErrors.emailPhone="Email or phone is invalid"
    

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";

    if (!formData.confirmPassword) newErrors.confirmPassword = "Confirm password is required";
    else if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Passwords must match";

    return newErrors;
  };

  return (
    <div className='RegisterPage'>
        <h2>Register</h2>
        <form className='formDiv' onSubmit={handleSubmit}>
      <div className='inputDiv'>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder='First Name'
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <div className="error">{errors.firstName}</div>}
      </div>

      <div className='inputDiv'>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder='Last Name'
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <div className="error">{errors.lastName}</div>}
      </div>

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

      <div className='inputDiv'>
        
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder='Confirm Password'
          onChange={handleChange}
        />
        {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
      </div>
      {
        loading ? <div className='loader'></div> : <button type="submit">Register</button>
      }
    </form>
    </div>
  )
}

export default RegisterPage