import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import verifyRegisterRequest from '../services/operations/user/verifyRegisterRequest';
import { useSelector } from 'react-redux';
const RegisterOtpPage = () => {
  debugger
    const [otp, setOtp] = useState('');
    const {error,loading} =  useSelector(state => state.user);
    const {reqId} = useParams();

    const navigate = useNavigate();

    const handleChange = (otp) => {
      setOtp(otp);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if(otp.length<6) toast.info("Incomplete OTP!");
        else
        {
            verifyRegisterRequest(navigate,{reqId,otp});
        }
        
    }

  return (
    <div className='RegisterOtpPage'>
    <h1>Enter OTP</h1>
    <div>

    <OtpInput
              value={otp}
              onChange={handleChange}
              numInputs={6}
              renderInput={(props) => (
                <input
                  {...props}
                  placeholder="-"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    width:'20px',
                    textAlign:'center'
                  }}
                  
                />
              )}
              containerStyle={{
                justifyContent: "",
                gap: "0 10px",
              }}
            />


    </div>
    {
        loading ? <div className='loader'></div> : <button type="submit" onClick={submitHandler}>Register</button>
    }  
    </div>
  )
}

export default RegisterOtpPage