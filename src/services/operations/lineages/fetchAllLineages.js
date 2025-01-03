import { apiConnector } from "../../apiConnector"
import { Lineage } from "../../apiContant"

const  fetchAllLineages_API = async () =>  {

   try
   {
        const response = await apiConnector("GET",Lineage.FETCH_ALL_LINEAGES);
        if(response.data.success) return response.data.body;
        throw new Error(response.data.message);
   }
   catch(error)
   {
        return error; 
   }

}

export default  fetchAllLineages_API