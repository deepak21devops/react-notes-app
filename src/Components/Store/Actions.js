export const addNotes = (payload) => {
  return {
    type: "ADD_SAGA_NOTES",
    payload,
  };
};

export const putNotes = (payload) => {
  return {
    type: "REDUCER_NOTES_ADD",
    payload,
  };
};
