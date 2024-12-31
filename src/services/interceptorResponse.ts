export const successRes = (response:any) => response;

export const errorRes = async (err:any) => {
	return Promise.reject(err);
};