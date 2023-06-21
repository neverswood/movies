import { configureStore } from '@reduxjs/toolkit';
import checkReducer from './features/MovieSlice';
import movieReducer from './features/MovieSlice';
export type State = {
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

export type ReduxAction<T, P> = { type: T; payload: P };

export type Dispatch =
  | ReduxAction<string, any>
  | Promise<any>
  | ((
      dispatch: Dispatch,
      getState: GetState
    ) => ReduxAction<string, any> | Promise<any>);

export type GetState = () => State;

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// export type DispatchBoundFn<P> = (dispatch: Dispatch, getState: GetState) => P;
