import { apiConnector } from "../../apiConnector"
import { People } from "../../apiContant"

const  fetchPersonViewDetails_API = async (id) =>  {

   try
   {
        const response = await apiConnector("GET",People.FETCH_PERSON_VIEW_DETAILS+id);
        if(response.data.success) return response.data.body;
        
   }
   catch(error)
   {
    if (error.response && error.response.data) {
        console.error('Error:', error.response.data);
        throw new Error(error.response.data.message || 'An error occurred while fetching person details');
      } else {
        // General error handling if it's not from the response
        console.error('Error:', error);
        throw new Error('An unexpected error occurred');
      }
   }

}

export default  fetchPersonViewDetails_API;