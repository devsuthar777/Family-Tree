import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    regReqId: localStorage.getItem("regReqId") ? localStorage.getItem("regReqId") : null,
    userInfo: localStorage.getItem("familyTree_UserInfo") ? JSON.parse(localStorage.getItem("familyTree_UserInfo")) : null,
    loading:false,
    error:null,
}

const userSlice = createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        setRegReqId(state,value) {
            state.regReqId = value.payload;
        },
        setUserInfo(state,value) {
            state.userInfo = value.payload
        },
        setLoading(state,value){
            state.loading =value.payload;
        },
        setError(state,value){
            state.error = value.payload;
        },
    }
});

export const {setRegReqId,setLoading,setError,setUserInfo} = userSlice.actions;
export default userSlice.reducer;