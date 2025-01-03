
import { all } from "redux-saga/effects";
import { peopleSaga } from "./peopleSaga"
import { userSaga } from "./userSaga";
import { villageSaga } from "./villageSaga";
import { lineageSaga } from "./lineageSaga";

export default function* rootSaga() {
    yield all([
        peopleSaga(),
        userSaga(),
        villageSaga(),
        lineageSaga(),

    ])
}