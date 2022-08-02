import { takeEvery, takeLatest, put } from "redux-saga/effects";
import { putNotes } from "./Actions";
// Workers

function* newNotesAdd(payload) {
  yield put(putNotes, payload);
}
// Watchers

export function* rootSaga() {
  yield takeEvery("ADD_SAGA_NOTES", newNotesAdd);
}
