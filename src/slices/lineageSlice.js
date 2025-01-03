import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lineages: null,
    loading:false,
    error:null,
}

const lineageSlice = createSlice({
    name:"lineage",
    initialState:initialState,
    reducers:{
        setLineages(state,value){
            state.lineages=value.payload;
        },
        setLoading(state,value){
            state.loading = value.payload;
        },
        setError(state,value){
            state.error=value.payload
        }
    }
});

export const {setLineages,setLoading,setError}= lineageSlice.actions;
export default lineageSlice.reducer;