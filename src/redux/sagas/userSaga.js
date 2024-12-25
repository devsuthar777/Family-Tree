import { put,takeEvery } from "redux-saga/effects";
import {setRegReqId,setUserInfo,setError,setLoading} from "../../slices/userSlice";
import createRegisterRequest from "../../services/operations/user/createRegisterRequest";
import { CREATE_REG_REQ, LOGIN_USER } from "../constants/userContants";
import { toast } from "react-toastify";
import loginUser_API from "../../services/operations/user/loginUser";



function* createRegReq(action)
{
    debugger
 
    yield put(setLoading(true));
    yield put(setUserInfo(null));
    try
    {
        const response = yield createRegisterRequest(action.payload.formData);
        yield put(setRegReqId(response));
        action.payload.navigate(response);

    }
    catch(error)
    {  
        toast.error(error.message);
    }

    yield put(setLoading(false));
    

}

function* loginUser(action)
{
 
    yield put(setLoading(true));
    yield put(setUserInfo(null));
    try
    {
        const response = yield loginUser_API(action.payload.formData);
        yield put(setUserInfo(response));
        action.payload.navigate("/");
    

    }
    catch(error)
    {  
        toast.error(error.message);
    }

    yield put(setLoading(false));
    

}


export function* userSaga() {
    yield takeEvery(CREATE_REG_REQ,createRegReq);
    yield takeEvery(LOGIN_USER,loginUser);
}