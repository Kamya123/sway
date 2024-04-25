import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

// Create an Axios instance with custom configuration
const axiosInstance: AxiosInstance = axios.create({
    baseURL: '/api', // Your API base URL
    timeout: 10000, // Request timeout in milliseconds
    headers: {
        'Content-Type': 'application/json', // Default content type
    },
});

// Request interceptor for adding authorization token or other headers
axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig<any>) => {
        // Add authorization token or other headers here if needed
        // config.headers.Authorization = `Bearer ${accessToken}`;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// Response interceptor for handling global error responses
axiosInstance.interceptors.response.use(
    (response) => {
        // Handle successful responses here
        return response;
    },
    (error) => {
        // Handle error responses here
        return Promise.reject(error);
    },
);

export default axiosInstance;
