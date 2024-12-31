import { Dispatch } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  createCommentStart,
  createCommentSuccess,
  createCommentFailure,
} from '../store/CommentStore';
import { apiPostComment } from '../../services/api/blog.api';
import { IComment } from '../../types/IParams';

export const createComment =
  (params: IComment) => async (dispatch: Dispatch) => {
    dispatch(createCommentStart());
    try {
      const response = await apiPostComment(params);
      dispatch(createCommentSuccess(response?.data));
    } catch (err: any) {
      dispatch(createCommentFailure(err.message ?? 'Error create comment'));
      toast.error(err.message ?? 'Error create comment');
    }
  };
