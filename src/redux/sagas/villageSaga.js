import { put, takeEvery } from "redux-saga/effects";
import { FETCH_ALL_VILLAGES } from "../constants/villageConstants";
import { setError,setLoading,setVillages } from "../../slices/villageSlice";
import fetchAllVillages_API from "../../services/operations/villages/fetchAllVillages";

function* fetchAllVillages(action)
{
    yield put(setLoading(true));
    try
    {
        const response = yield fetchAllVillages_API();
        yield put(setVillages(response))
    }
    catch(error)
    {
        yield put(setError(error))
    }

    yield put(setLoading(false));
    

}

export function* villageSaga()
{
    yield takeEvery(FETCH_ALL_VILLAGES,fetchAllVillages)   
}