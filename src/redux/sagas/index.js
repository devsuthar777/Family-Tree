
import { all } from "redux-saga/effects";
import { peopleSaga } from "./peopleSaga"

export default function* rootSaga() {
    yield all([
        peopleSaga(),
    ])
}