import { fork, all } from "redux-saga/effects";

import propertiesSaga from "./propertiesSaga";

export default function* rootSaga() {
  yield all([fork(propertiesSaga)]);
}
