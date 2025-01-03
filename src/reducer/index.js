import {combineReducers} from '@reduxjs/toolkit'
import peopleReducer from '../slices/peopleSlice';
import userReducer  from '../slices/userSlice';
import villageReducer  from '../slices/villageSlice';
import lineageReducer from '../slices/lineageSlice'
const rootReducer = combineReducers({
    people:peopleReducer,
    user:userReducer,
    village:villageReducer,
    lineage:lineageReducer
});

export default rootReducer;