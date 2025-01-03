import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    villages : [],
    loading: false,
    error:null,
}


const villageSlice = createSlice({
    name:"village",
    initialState:initialState,
    reducers:{
        setVillages(state,value){
            state.villages =value.payload;
        },
        setLoading(state,value){
            state.loading =value.payload;
        },
        setError(state,value){
            state.error= value.payload;
        }
    }
})

export const {setVillages,setLoading,setError}=villageSlice.actions;
export default villageSlice.reducer;
