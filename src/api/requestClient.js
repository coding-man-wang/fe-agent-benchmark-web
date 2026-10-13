import axios, { AxiosError } from 'axios';
export class ApiError extends Error {
    status;
    constructor(status, message) {
        super(message);
        this.status = status;
        this.name = 'ApiError';
    }
}
const client = axios.create({ baseURL: '/api', timeout: 5000 });
export async function request(config) {
    try {
        const response = await client.request(config);
        return response.data;
    }
    catch (error) {
        if (error instanceof AxiosError) {
            throw new ApiError(error.response?.status ?? 0, error.response?.data?.message ?? error.message);
        }
        throw error;
    }
}
