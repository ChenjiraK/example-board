import { createSlice } from '@reduxjs/toolkit';
interface CommentState {
  create: {
    loading: boolean;
    isSuccess: boolean;
    error: string | null;
  };
}
const initialState: CommentState = {
  create: {
    loading: false,
    isSuccess: false,
    error: null,
  },
};

const comments = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    //#create
    createCommentStart(state) {
      state.create.loading = true;
      state.create.isSuccess = false;
      state.create.error = null;
    },
    createCommentSuccess(state) {
      state.create.loading = false;
      state.create.isSuccess = true;
      state.create.error = null;
    },
    createCommentFailure(state, action) {
      state.create.loading = false;
      state.create.isSuccess = false;
      state.create.error = action.payload;
    },
  },
});

export const {
  createCommentStart,
  createCommentSuccess,
  createCommentFailure,
} = comments.actions;
export default comments.reducer;
