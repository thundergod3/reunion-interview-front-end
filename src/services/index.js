import axios from "axios";

class HTTPMethod {
	constructor() {
		this.axios = axios;
		this.axios.defaults.baseURL = process.env.REACT_APP_API_URL;
	}

	get = (...props) => axios.get(...props);

	post = (...props) => axios.post(...props);

	put = (...props) => axios.put(...props);

	delete = (...props) => axios.delete(...props);

	attachTokenToHeader = ({ token }) =>
		axios.interceptors.request.use(
			function (config) {
				if (token) {
					config.headers.Authorization = `Bearer ${token}`;
				}

				return config;
			},
			function (error) {
				return Promise.reject(error);
			}
		);

	removeTokenToHeader = () =>
		axios.interceptors.request.use(
			function (config) {
				config.headers.Authorization = "";

				return config;
			},
			function (error) {
				return Promise.reject(error);
			}
		);
}

export default new HTTPMethod();
