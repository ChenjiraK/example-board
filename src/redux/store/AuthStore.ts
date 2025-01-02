import { createSlice } from '@reduxjs/toolkit';
interface AuthState {
   login: {
      token: string | null;
      loading: boolean;
      isSuccess: boolean;
      error: string | null;
  };
}
const initialState: AuthState = {
  login: {
      token: null,
      loading: false,
      isSuccess: false,
      error: null,
  },
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.login.loading = true;
      state.login.isSuccess = false;
      state.login.error = null;
    },
    loginSuccess(state, action) {
      state.login.token = action.payload?.access_token;
      state.login.loading = false;
      state.login.isSuccess = true;
      state.login.error = null;
    },
    loginFailure(state, action) {
      state.login.loading = false;
      state.login.isSuccess = false;
      state.login.error = action.payload;
    },
  },
});

export const {
   loginStart,
   loginSuccess,
   loginFailure,
} = auth.actions;
export default auth.reducer;
