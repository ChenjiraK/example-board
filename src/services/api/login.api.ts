import httpClient from '../httpClient';

export const apiLogin = (params: any) => httpClient.post(`/users/login`, params);