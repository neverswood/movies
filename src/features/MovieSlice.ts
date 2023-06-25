import { createSlice } from '@reduxjs/toolkit';

type initialStateProps = {
  data: Array<{
    id: string;
    title: string;
    category: string;
    likes: number;
    dislikes: number;
  }>;
};

export type Movie = {
  id: string;
  title: string;
  category: string;
  likes: number;
  dislikes: number;
};

const initialState: initialStateProps = {
  data: [],
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    updateMovie: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { updateMovie } = movieSlice.actions;
export default movieSlice.reducer;
