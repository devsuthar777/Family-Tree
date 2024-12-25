
import { all } from "redux-saga/effects";
import { peopleSaga } from "./peopleSaga"
import { userSaga } from "./userSaga";

export default function* rootSaga() {
    yield all([
        peopleSaga(),
        userSaga()
    ])
}