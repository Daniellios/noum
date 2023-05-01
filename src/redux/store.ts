import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";

import flightReducer from "../redux/slices/flightsSlice";

const rootReducer = combineReducers({
  flightBoard: flightReducer,
});

export const store = configureStore({ reducer: rootReducer });

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];

export type AppStore = ReturnType<typeof setupStore>;
