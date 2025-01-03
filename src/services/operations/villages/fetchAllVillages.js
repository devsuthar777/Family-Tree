import { apiConnector } from "../../apiConnector"
import { Village } from "../../apiContant"

const  fetchAllVillages_API = async () =>  {

   try
   {
        const response = await apiConnector("GET",Village.FETCH_ALL_VILLAGES);
        if(response.data.success) return response.data.body;
        throw new Error(response.data.message);
   }
   catch(error)
   {
        return error; 
   }

}

export default  fetchAllVillages_API