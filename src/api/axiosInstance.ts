import axios from "axios";
import tokenManager from "../auth/tokenManager"
const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
    }
});

axiosInstance.interceptors.request.use(
    (config)=>{
        const token = tokenManager.getAccessToken();
        if(token && config.headers){
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    }
)

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {    
        if(error.response && error.response?.status === 401){
            try {
                const refreshToken = await axios.post("http://localhost:8080/api/auth/refresh", {}, { withCredentials: true });
                const newAccessToken = refreshToken.data.accessToken;
                tokenManager.setAccessToken(newAccessToken);
                error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;
                return axios(error.config);
            } catch (refreshError) {
                console.error("Token refresh failed:", refreshError);
                tokenManager.clearAccessToken();
                window.location.href = "/login";
            }
            
        }
        return Promise.reject(error);
    }
)

export default axiosInstance;
