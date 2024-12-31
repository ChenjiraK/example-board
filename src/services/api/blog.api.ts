import httpClient from '../httpClient';

export const apiGetBlogs = (params: any = {}) => httpClient.get('/blogs', {params});
export const apiGetBlogById = (id:number) => httpClient.get(`/blogs/${id}`);
export const apiPostBlog = (params: any) => httpClient.post('/blogs', params);
export const apiPutBlog = (id:number, params: any) => httpClient.put(`/blogs/${id}`, params);
export const apiDeleteBlog = (id: any) => httpClient.delete(`/blogs/${id}`);

export const apiGetComments = (params: any = {}) => httpClient.get('/comments', {params});
export const apiPostComment = (params: any) => httpClient.post('/comments', params);
export const apiPutComment = (params: any) => httpClient.put('/comments', params);
export const apiDeleteComment = (id: number) => httpClient.delete(`/comments/${id}`);
