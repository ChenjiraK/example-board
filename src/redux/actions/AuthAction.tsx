import { Dispatch } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
   loginStart,
   loginSuccess,
   loginFailure,
} from '../store/AuthStore';
import { apiLogin } from '../../services/api/login.api';
import { IUser } from '../../types/IParams'

export const login = (params:IUser) => async (dispatch: Dispatch) => {
    dispatch(loginStart());
    try {
      const response = await apiLogin(params);
      dispatch(loginSuccess(response?.data));
      return { isSuccess: true };
    } catch (err: any) {
      dispatch(loginFailure(err.message ?? 'Login failed'));
      toast.error(err.message ?? 'Login failed');
      return { isSuccess: false };
    }
  };
