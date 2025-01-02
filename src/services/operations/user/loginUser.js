
import { apiConnector } from "../../apiConnector"
import { User } from "../../apiContant"
import { toast } from "react-toastify";

const  loginUser_API = async (body) =>  {

    
   try
   {
        const response = await apiConnector("POST",User.LOGIN_USER,body);
        if(response.data.success)
            {
                
                toast.success(response.data.message);
                localStorage.setItem("familyTree_UserInfo",JSON.stringify(response.data.userData));
                return response.data.userData;
            } 
        
        
   }
   catch(error)
   {
    if (error.response && error.response.data) {
        console.error('Error:', error.response.data);
        throw new Error(error.response.data.message || 'An error occurred while login');
        
      } else {
        // General error handling if it's not from the response
        console.error('Error:', error);      
        throw new Error('An unexpected error occurred');
      }
   }

}

export default  loginUser_API;