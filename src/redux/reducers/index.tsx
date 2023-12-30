import {createSlice} from '@reduxjs/toolkit';
import type {dbData} from '../../types';
const initialState = {
  dbData: [] as dbData,
};
const reducer = createSlice({
  name: 'sightwords',
  initialState,
  reducers: {
    getDataFromdb: (state, action) => {
      state.dbData = action.payload;
      return state;
    },
  },
});
export default reducer.reducer;
