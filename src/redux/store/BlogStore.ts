import { createSlice } from '@reduxjs/toolkit';
import { transformerBlog } from '../../transformers/transformerBlog';
import { IBlogParams } from '@/types/IParams';
interface BlogState {
    list: { 
        data: any,
        loading: boolean;
        isSuccess: boolean;
        error: string | null;
    },
    create: {
        loading: boolean;
        isSuccess: boolean;
        error: string | null;
    },
    update: {
        loading: boolean;
        isSuccess: boolean;
        error: string | null;
    },
    delete: {
        loading: boolean;
        isSuccess: boolean;
        error: string | null;
    }
    
}
const initialState: BlogState = {
    list: { 
        data: null,
        loading: false,
        isSuccess: false,
        error: null,
    },
    create: {
        loading: false,
        isSuccess: false,
        error: null,
    },
    update: {
        loading: false,
        isSuccess: false,
        error: null,
    },
    delete: {
        loading: false,
        isSuccess: false,
        error: null,
    }
};

const blogs = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    //#get
    getBlogStart(state) {
        state.list.loading = true;
        state.list.isSuccess = false;
        state.list.error = null;
    },
    getBlogSuccess(state, action) {
        const list = action.payload ?? [];
        state.list.data = list.map((item:IBlogParams) => transformerBlog(item)); 
        state.list.loading = false;
        state.list.isSuccess = true;
        state.list.error = null;
    },
    getBlogFailure(state, action) {
        state.list.loading = false;
        state.list.isSuccess = false;
        state.list.error = action.payload;
    },
    
    //#create
    createBlogStart(state) {
        state.create.loading = true;
        state.create.isSuccess = false;
        state.create.error = null;
    },
    createBlogSuccess(state) {
        state.create.loading = false;
        state.create.isSuccess = true;
        state.create.error = null;
    },
    createBlogFailure(state, action) {
        state.create.loading = false;
        state.create.isSuccess = false;
        state.create.error = action.payload;
    },

    //#update
    updateBlogStart(state) {
        state.update.loading = true;
        state.update.isSuccess = false;
        state.update.error = null;
    },
    updateBlogSuccess(state) {
        state.update.loading = false;
        state.update.isSuccess = true;
        state.update.error = null;
    },
    updateBlogFailure(state, action) {
        state.update.loading = false;
        state.update.isSuccess = false;
        state.update.error = action.payload;
    },

    //#delete
    deleteBlogStart(state) {
        state.delete.loading = true;
        state.delete.isSuccess = false;
        state.delete.error = null;
    },
    deleteBlogSuccess(state) {
        state.delete.loading = false;
        state.delete.isSuccess = true;
        state.delete.error = null;
    },
    deleteBlogFailure(state, action) {
        state.delete.loading = false;
        state.delete.isSuccess = false;
        state.delete.error = action.payload;
    },
  },
});

export const { 
    getBlogStart, getBlogSuccess, getBlogFailure,
    createBlogStart, createBlogSuccess, createBlogFailure,
    updateBlogStart, updateBlogSuccess, updateBlogFailure,
    deleteBlogStart, deleteBlogSuccess, deleteBlogFailure
} = blogs.actions;
export default blogs.reducer;
