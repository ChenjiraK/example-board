export const successReq = (request:any) => {
	const accessToken = localStorage.getItem('access_token');

	if (accessToken) {
		request.headers.Authorization = `Bearer ${accessToken}`;
	}

	return request;
};

export const errorReq = (err:any) => Promise.reject(err);