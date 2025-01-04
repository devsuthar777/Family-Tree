import { toast } from "react-toastify";
import { apiConnector } from "../../apiConnector"
import { Village } from "../../apiContant"

const  createVillage_API = async (data) =>  {

   try
   {
        const response = await apiConnector("POST",Village.CREATE_VILLAGE,data);
        if(response.data.success) return response.data;
        throw new Error(response.data.message);
   }
   catch(error)
   {
     if(error.response && error.response.data) {
          console.error('Error:', error.response.data);
          throw new Error(error.response.data.message || 'An error occurred while login');
          
        } else {
          // General error handling if it's not from the response
          console.error('Error:', error);      
          throw new Error('An unexpected error occurred');
        }
   }

}

export default  createVillage_API