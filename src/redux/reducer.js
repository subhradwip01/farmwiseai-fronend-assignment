import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  student: null,
  business: null,
  selfEmployed: null,
};

const fieldSlice = createSlice({
  name: 'field',
  initialState,
  reducers: {
    addField: (state, action) => {
      const { proffession, ...data } = action.payload;
      state[proffession] = { ...data };
      // Put updated data into local storage
      localStorage.setItem('allProfessionalFeildInformation', JSON.stringify(state));
    },
    saveForm: (state, action) => {
      const { selectedProfession, ...newData } = action.payload;
      console.log(newData);
      state[selectedProfession] = { ...newData };
      // Put updated data into local storage
      localStorage.setItem('allProfessionalFeildInformation', JSON.stringify(state));
    },
    initializeState: (state, action) => {
      return action.payload;
    },
  },
});

export const { addField, saveForm, initializeState } = fieldSlice.actions;
export default fieldSlice.reducer;
