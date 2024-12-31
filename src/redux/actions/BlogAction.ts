import { Dispatch } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  getBlogsStart,
  getBlogsSuccess,
  getBlogsFailure,
  getBlogStart,
  getBlogSuccess,
  getBlogFailure,
  createBlogStart,
  createBlogSuccess,
  createBlogFailure,
  updateBlogStart,
  updateBlogSuccess,
  updateBlogFailure,
  deleteBlogStart,
  deleteBlogSuccess,
  deleteBlogFailure,
} from '../store/BlogStore';
import {
  apiGetBlogs,
  apiGetBlogById,
  apiPostBlog,
  apiPutBlog,
  apiDeleteBlog,
} from '../../services/api/blog.api';
import { IBlog } from '../../types/IParams';

export const getBlogs =
  (params: any = {}) =>
  async (dispatch: Dispatch) => {
    dispatch(getBlogsStart());
    try {
      const response = await apiGetBlogs(params);
      dispatch(getBlogsSuccess(response?.data));
    } catch (err: any) {
      dispatch(getBlogsFailure(err.message ?? 'Error fetch blogs'));
      toast.error(err.message ?? 'Error fetch blogs');
    }
  };

export const getBlogById =
  (id: string | number) => async (dispatch: Dispatch) => {
    dispatch(getBlogStart());
    try {
      const response = await apiGetBlogById(id);
      dispatch(getBlogSuccess(response?.data));
    } catch (err: any) {
      dispatch(getBlogFailure(err.message ?? 'Error fetch blogs'));
      toast.error(err.message ?? 'Error fetch blogs');
    }
  };

export const createBlog = (params: IBlog) => async (dispatch: Dispatch) => {
  dispatch(createBlogStart());
  try {
    const response = await apiPostBlog(params);
    dispatch(createBlogSuccess(response?.data));
  } catch (err: any) {
    dispatch(createBlogFailure(err.message ?? 'Error create blog'));
    toast.error(err.message ?? 'Error create blog');
  }
};

export const updateBlog =
  (id: number, params: IBlog) => async (dispatch: Dispatch) => {
    dispatch(updateBlogStart());
    try {
      const response = await apiPutBlog(id, params);
      dispatch(updateBlogSuccess(response?.data));
    } catch (err: any) {
      dispatch(updateBlogFailure(err.message ?? 'Error update blog'));
      toast.error(err.message ?? 'Error update blog');
    }
  };

export const deleteBlog = (params: IBlog) => async (dispatch: Dispatch) => {
  dispatch(deleteBlogStart());
  try {
    const response = await apiDeleteBlog(params);
    dispatch(deleteBlogSuccess(response?.data));
  } catch (err: any) {
    dispatch(deleteBlogFailure(err.message ?? 'Error delete blog'));
    toast.error(err.message ?? 'delete update blog');
  }
};
