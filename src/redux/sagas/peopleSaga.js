import { put,takeEvery } from "redux-saga/effects";
import { FETCH_ALL_PEOPLE, FETCH_PERSON_VIEW_DETAILS } from "../constants/peopleContants";
import {setPeopleList,setError,setLoading,setPersonViewDetails} from "../../slices/peopleSlice";
import fetchAllPeople_API from '../../services/operations/people/fetchAllPeople'
import fetchPersonViewDetails_API from '../../services/operations/people/fetchPersonViewDetails'
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
    try
    {
        const response = yield fetchPersonViewDetails_API(action.payload);
        yield put(setPersonViewDetails(response))

    }
    catch(error)
    {
        yield put(setError(error))
    }

    yield put(setLoading(false));
    

}

export function* peopleSaga() {
    yield takeEvery(FETCH_ALL_PEOPLE,fetchAllPeople);
    yield takeEvery(FETCH_PERSON_VIEW_DETAILS,fetchPersonViewDetails)
}