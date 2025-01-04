import { put, takeEvery } from "redux-saga/effects";
import { CREATE_VILLAGE, FETCH_ALL_VILLAGES } from "../constants/villageConstants";
import { setError,setLoading,setVillages } from "../../slices/villageSlice";
import fetchAllVillages_API from "../../services/operations/villages/fetchAllVillages";
import { toast } from "react-toastify";
import createVillage_API from "../../services/operations/villages/createVillage";
import { fetchAllVillages } from '../customActions.js/villageActions';

function* fetchAllVillagesSaga(action)
{
    yield put(setLoading(true));
    try
    {
        const response = yield fetchAllVillages_API();
        yield put(setVillages(response))
    }
    catch(error)
    {
        toast.error(error.message);
        yield put(setError(error))
    }

    yield put(setLoading(false));
    

}

function* createVillage(action)
{
    yield put(setLoading(true));
    try
    {
        const response = yield createVillage_API(action.payload);
        toast.success(response.message);
        
        yield put(fetchAllVillages());
        
    }
    catch(error)
    {
        toast.error(error.message);
        yield put(setError(error))
    }

    yield put(setLoading(false));
    

}

export function* villageSaga()
{
    yield takeEvery(FETCH_ALL_VILLAGES,fetchAllVillagesSaga) 
    yield takeEvery(CREATE_VILLAGE,createVillage)  
}