import { apiConnector } from "../../apiConnector"
import { People } from "../../apiContant"

const  fetchPersonViewDetails_API = async (id) =>  {

   try
   {
        const response = await apiConnector("GET",People.FETCH_PERSON_VIEW_DETAILS+id);
        if(response.data.success) return response.data.body;
        throw new Error(response.data.message);
   }
   catch(error)
   {
        return error; 
   }

}

export default  fetchPersonViewDetails_API;