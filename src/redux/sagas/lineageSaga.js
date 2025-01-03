import { put, takeEvery } from "redux-saga/effects";
import { FETCH_ALL_LINEAGES } from "../constants/lineageConstants";
import fetchAllLineages_API from "../../services/operations/lineages/fetchAllLineages";
import { setError,setLoading,setLineages } from "../../slices/lineageSlice";

function* fetchAllLineages(action)
{
 
    try
    {
        const response = yield fetchAllLineages_API();
        yield put(setLineages(response))
    }
    catch(error)
    {
        yield put(setError(error))
    }

    yield put(setLoading(false));
    

}

export function* lineageSaga()
{
    yield takeEvery(FETCH_ALL_LINEAGES,fetchAllLineages)   
}