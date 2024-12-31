import axios from 'axios';
import { successReq, errorReq} from './interceptorRequest';
import { successRes, errorRes}  from './interceptorResponse';

const httpClient = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	timeout: 60000,
	headers: {
		'Content-Type': 'application/json',
		accept: 'application/json',
	},
	withCredentials: true,
});

httpClient.interceptors.request.use(successReq, errorReq);
httpClient.interceptors.response.use(successRes, errorRes);

export default httpClient;