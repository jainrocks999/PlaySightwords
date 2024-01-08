import {createSlice} from '@reduxjs/toolkit';
import type {dbData, random} from '../../types';
const initialState = {
  dbData: [] as dbData,
  random: {random: false} as random,
  backSound: {
    word: true,
    find: true,
    memory: true,
    bingo: true,
  },
  page: 'home',
  grade: 'tblWord',
};
const reducer = createSlice({
  name: 'sightwords',
  initialState,
  reducers: {
    getDataFromdb: (state, action) => {
      state.dbData = action.payload;
      return state;
    },
    setRendom: (state, action) => {
      state.random = action.payload;
      return state;
    },
    backSound: (state, action) => {
      state.backSound = action.payload;
      return state;
    },
    setPageChange: (state, action) => {
      state.page = action.payload;
      return state;
    },
    setGrade: (state, action) => {
      state.grade = action.payload;
      return state;
    },
  },
});
export default reducer.reducer;
