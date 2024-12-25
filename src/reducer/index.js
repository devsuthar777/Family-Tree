import {combineReducers} from '@reduxjs/toolkit'
import peopleReducer from '../slices/peopleSlice';
import userReducer  from '../slices/userSlice';
const rootReducer = combineReducers({
    people:peopleReducer,
    user:userReducer
});

export default rootReducer;