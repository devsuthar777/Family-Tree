import { apiConnector } from "../../apiConnector"
import { Village } from "../../apiContant"

const  fetchAllVillages_API = async () =>  {
debugger
   try
   {
        const response = await apiConnector("GET",Village.FETCH_ALL_VILLAGES);
        if(response.data.success) return response.data.body;
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

export default  fetchAllVillages_API