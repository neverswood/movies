import { configureStore } from '@reduxjs/toolkit';
import movieReducer, { Movie } from './features/MovieSlice';
import SelectedOptionReducer from './features/SelectedOptionSlice';
export type State = {
  movie: {
    data: Movie[];
  };
  option: {
    options: Array<string>;
  };
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
    option: SelectedOptionReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// export type DispatchBoundFn<P> = (dispatch: Dispatch, getState: GetState) => P;
