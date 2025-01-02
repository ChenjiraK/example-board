import { configureStore } from '@reduxjs/toolkit';
import blogStore from './store/BlogStore';
import commentStore from './store/CommentStore';
import authStore from './store/AuthStore'

const store = configureStore({
  reducer: {
    blogs: blogStore,
    comments: commentStore,
    auth: authStore,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;