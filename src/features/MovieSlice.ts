import { createSlice } from '@reduxjs/toolkit';

type initialStateProps = {
  movies: [
    {
      id: string;
      title: string;
      category: string;
      likes: number;
      dislikes: number;
    }
  ];
};

const initialState: initialStateProps = {
  movies: [
    {
      id: '',
      title: '',
      category: '',
      likes: 0,
      dislikes: 0,
    },
  ],
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    updateMovie: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { updateMovie } = movieSlice.actions;
export default movieSlice.reducer;
