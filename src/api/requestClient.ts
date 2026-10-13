import axios, { AxiosError, type AxiosRequestConfig } from 'axios'

export class ApiError extends Error {
  constructor(public readonly status: number, message: string) {
    super(message)
    this.name = 'ApiError'
  }
}

const client = axios.create({ baseURL: '/api', timeout: 5000 })

export async function request<T>(config: AxiosRequestConfig): Promise<T> {
  try {
    const response = await client.request<T>(config)
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new ApiError(error.response?.status ?? 0, error.response?.data?.message ?? error.message)
    }
    throw error
  }
}
