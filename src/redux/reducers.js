import { ADD_FIELD, INITIALIZE_STATE } from "./constant";
const initalallProfessionalFeildInformation = {
  student: null,
  business: null,
  selfEmployed: null,
};

export const fieldReducer = (state = initalallProfessionalFeildInformation, action) => {
  switch (action.type) {
    case ADD_FIELD:
      const { proffession, ...data } = action.payload;
      const newState = { ...state };
      // Put Upadted data into the local storage
      localStorage.setItem("allProfessionalFeildInformation",JSON.stringify(newState));
      newState[proffession] = { ...data };
      return newState;
    case INITIALIZE_STATE:
        return action.payload;
    default:
        return state
  }
};

// AS I am using redux only, see creatign on reducers => if I use reduxjs/toolkit I can use createSlice() to avoind unnecessay redux templates

