import { Dispatch } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
   getBlogStart,getBlogSuccess,getBlogFailure,
   createBlogStart, createBlogSuccess, createBlogFailure,
   updateBlogStart, updateBlogSuccess, updateBlogFailure,
   deleteBlogStart, deleteBlogSuccess, deleteBlogFailure
} from '../store/BlogStore';
import { 
   apiGetBlogs,
   apiGetBlogById,
   apiPostBlog, 
   apiPutBlog,
   apiDeleteBlog
} from '../../services/api/blog.api';
import { IBlogParams } from '../../types/IParams';

export const getBlogs = (params: any = {}) => async (dispatch: Dispatch) => {
   dispatch(getBlogStart());
   try {
      console.log(params);
      const response = await apiGetBlogs(params);
      dispatch(getBlogSuccess(response?.data));
   } catch (err: any) {
      dispatch(getBlogFailure(err.message ?? 'Error fetch blogs'));
      toast.error(err.message ?? 'Error fetch blogs');
   }
};

export const getBlogById = (params: any = {}) => async (dispatch: Dispatch) => {
   dispatch(getBlogStart());
   try {
      console.log(params);
      const response = await apiGetBlogs(params);
      dispatch(getBlogSuccess(response?.data));
   } catch (err: any) {
      dispatch(getBlogFailure(err.message ?? 'Error fetch blogs'));
      toast.error(err.message ?? 'Error fetch blogs');
   }
};

export const createBlog = (params:IBlogParams) => async (dispatch: Dispatch) => {
   dispatch(createBlogStart());
   try {
      console.log(params);
      const response = await apiPostBlog(params);
      dispatch(createBlogSuccess(response?.data));
   } catch (err: any) {
      dispatch(createBlogFailure(err.message ?? 'Error create blog'));
      toast.error(err.message ?? 'Error create blog');
   }
};

export const updateBlog = (id:number, params:IBlogParams) => async (dispatch: Dispatch) => {
   dispatch(updateBlogStart());
   try {
      console.log(params);
      const response = await apiPutBlog(id, params);
      dispatch(updateBlogSuccess(response?.data));
   } catch (err: any) {
      dispatch(updateBlogFailure(err.message ?? 'Error update blog'));
      toast.error(err.message ?? 'Error update blog');
   }
};

export const deleteBlog = (params:IBlogParams) => async (dispatch: Dispatch) => {
   dispatch(deleteBlogStart());
   try {
      console.log(params);
      const response = await apiGetBlogs(params);
      dispatch(deleteBlogSuccess(response?.data));
   } catch (err: any) {
      dispatch(deleteBlogFailure(err.message ?? 'Error delete blog'));
      toast.error(err.message ?? 'delete update blog');
   }
};
