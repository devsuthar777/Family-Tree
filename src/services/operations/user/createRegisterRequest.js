
import { apiConnector } from "../../apiConnector"
import { User } from "../../apiContant"
import { toast } from "react-toastify";

const  createRegisterRequest = async (body) =>  {
debugger
    
   try
   {
        const response = await apiConnector("POST",User.CREATE_REGISTER_REQUEST,body);
        debugger
        if(response.data.success)
            {
                toast.success(response.data.message);
                 localStorage.setItem("regReqId",response.data.body.requestId);
                setTimeout(function(){
                    localStorage.setItem("regReqId","");
                },120000);
                return response.data.body.requestId;
            } 
        
        
   }
   catch(error)
   {
    if (error.response && error.response.data) {
        console.error('Error:', error.response.data);
        throw new Error(error.response.data.message || 'An error occurred while creating register request');
        
      } else {
        // General error handling if it's not from the response
        console.error('Error:', error);      
        throw new Error('An unexpected error occurred');
      }
   }

}

export default  createRegisterRequest;