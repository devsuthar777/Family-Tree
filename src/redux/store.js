import { configureStore } from "@reduxjs/toolkit"
import rootReducer  from "../reducer"

import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';
const sagaMidlleware = createSagaMiddleware();

const store = configureStore({
    reducer:rootReducer,
    middleware: () => [sagaMidlleware]
})

sagaMidlleware.run(rootSaga);

export default store;