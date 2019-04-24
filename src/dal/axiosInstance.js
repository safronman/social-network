import * as axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'e394c5d5-ee32-4ec0-bd66-cc95dd95ee43'
    }
});

export default axiosInstance;
