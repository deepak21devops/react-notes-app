import produce from "immer";

const initialState = {
  dataArray: [],
  notesDate: new Date(),
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REDUCER_NOTES_ADD":
      const newData = produce(state, (draft) => {
        console.log("Reducer Notes");
      });
      return newData;

    default:
      return state;
  }
};
