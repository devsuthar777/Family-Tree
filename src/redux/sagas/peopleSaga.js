import { put,takeEvery } from "redux-saga/effects";
import { FETCH_ALL_PEOPLE, FETCH_PERSON_VIEW_DETAILS } from "../constants/peopleContants";
import {setPeopleList,setError,setLoading,setPersonViewDetails} from "../../slices/peopleSlice";
import fetchAllPeople_API from '../../services/operations/people/fetchAllPeople'
import fetchPersonViewDetails_API from '../../services/operations/people/fetchPersonViewDetails'
import { toast } from "react-toastify";
function* fetchAllPeople(action)
{
 
    try
    {
        const response = yield fetchAllPeople_API();
        yield put(setPeopleList(response))

    }
    catch(error)
    {
        yield put(setError(error))
    }

    yield put(setLoading(false));
    

}


function* fetchPersonViewDetails(action)
{
 
    yield put(setLoading(true));
    yield put(setPersonViewDetails(null));
    try
    {
        const response = yield fetchPersonViewDetails_API(action.payload);
        yield put(setPersonViewDetails(response))
        action.payload.navigate("user/register/"+response);

    }
    catch(error)
    {  
        toast.error(error.message);
    }

    yield put(setLoading(false));
    

}

export function* peopleSaga() {
    yield takeEvery(FETCH_ALL_PEOPLE,fetchAllPeople);
    yield takeEvery(FETCH_PERSON_VIEW_DETAILS,fetchPersonViewDetails)
}