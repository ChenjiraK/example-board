import { configureStore } from '@reduxjs/toolkit';
import blogStore from './store/BlogStore';

const store = configureStore({
  reducer: {
    blogs: blogStore,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;