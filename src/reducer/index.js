import {combineReducers} from '@reduxjs/toolkit'
import peopleReducer from '../slices/peopleSlice';
const rootReducer = combineReducers({
    people:peopleReducer,
});

export default rootReducer;