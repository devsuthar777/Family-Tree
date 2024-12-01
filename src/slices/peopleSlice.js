import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    peopleList: localStorage.getItem("peopleList") ? JSON.parse(localStorage.getItem("peopleList")) : null,
    personViewDetails: null,
    loading:true,
    error:null,
}


const peopleSlice = createSlice({
    name:"people",
    initialState:initialState,
    reducers:{
        setPeopleList(state,value) {
            state.peopleList = value.payload;
        },
        setLoading(state,value){
            state.loading =value.payload;
        },
        setError(state,value){
            state.error = value.payload;
        },
        setPersonViewDetails(state,value){
            state.personViewDetails = value.payload;
        }
    }
});

export const {setPeopleList,setLoading,setError,setPersonViewDetails} = peopleSlice.actions;
export default peopleSlice.reducer;

