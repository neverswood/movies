import { createSlice } from '@reduxjs/toolkit';

type initialStateProps = {
  options: Array<string>;
};

const initialState: initialStateProps = {
  options: [],
};

export const selectedOptionSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    updateSelectedOption: (state, action) => {
      state.options = action.payload;
    },
  },
});

export const { updateSelectedOption } = selectedOptionSlice.actions;
export default selectedOptionSlice.reducer;
