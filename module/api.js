import Axios from "axios";
import _config from "next/config";
const publicRuntimeConfig = _config().publicRuntimeConfig;

const api = {
    get(path, params, token) {
        let url = apiUrl + path;
        let options = {
            method: "GET",
            url: url,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                withCredentials: true,
            },
            params: params,
        };
        if (token) {
            options.headers["Authorization"] = `Bearer ${token}`;
        }
        // console.log(options);
        return Axios.get(url, options);
    },
    getAuth(path, params, token) {
        let url = apiUrl + path;
        let options = {
            method: "GET",
            url: url,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                withCredentials: true,
            },
            params: params,
        };
        if (token) {
            options.headers["Authorization"] = `Bearer ${token}`;
        }
        return Axios.get(url, options);
    },
    post(path, params, token) {
        let url = apiUrl + path;
        let options = {
            url: url,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                withCredentials: true,
            },
            data: params,
        };
        if (token) {
            options.headers["Authorization"] = `Bearer ${token}`;
        }
        return Axios(options);
    },
    multipart(path, params, token) {
        let url = apiUrl + path;
        let options = {
            headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                withCredentials: true,
            },
        };
        if (token) {
            options.headers["Authorization"] = `Bearer ${token}`;
        }
        return Axios.post(url, params, options);
    },
};
export default api;
