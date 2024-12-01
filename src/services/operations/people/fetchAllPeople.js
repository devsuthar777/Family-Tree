import { apiConnector } from "../../apiConnector"
import { People } from "../../apiContant"

const  fetchAllPeople_API = async () =>  {

   try
   {
        const response = await apiConnector("GET",People.FETCH_ALL_PEOPLE_URL);
        if(response.data.success) return response.data.body;
        throw new Error(response.data.message);
   }
   catch(error)
   {
        return error; 
   }

}

export default  fetchAllPeople_API