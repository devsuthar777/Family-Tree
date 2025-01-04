import { CREATE_VILLAGE, FETCH_ALL_VILLAGES } from "../constants/villageConstants";

export const fetchAllVillages = () => ({
    type: FETCH_ALL_VILLAGES,
    payload: "",
  });

  export const createVillage = (data) => ({
    type: CREATE_VILLAGE,
    payload: data ? data : null ,
  });


  