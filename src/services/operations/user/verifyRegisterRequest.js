
import { apiConnector } from "../../apiConnector"
import { User } from "../../apiContant"
import { toast } from "react-toastify";

const  verifyRegisterRequest = async (navigate,body) =>  {

    
   try
   {
        const response = await apiConnector("POST",User.VERIFY_REGISTER_REQUEST,body);
        if(response.data.success)
            {
                toast.success(response.data.message);
                navigate('/user/login');
            } 
        
        
   }
   catch(error)
   {
    if (error.response && error.response.data) {
        console.error('Error:', error.response.data);
        //throw new Error(error.response.data.message || 'An error occurred while creating register request');
        toast.error(error.response.data.message || 'An error occurred while verify register request');
      } else {
        // General error handling if it's not from the response
        console.error('Error:', error);
        toast.error('An unexpected error occurred');
      
        //throw new Error('An unexpected error occurred');
      }
   }

}

export default  verifyRegisterRequest;