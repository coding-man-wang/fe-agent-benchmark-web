import { request } from './requestClient';
import { mockGetUser, mockListUsers } from '@/mocks/service';
const useMock = import.meta.env.VITE_API_MODE !== 'remote';
export function listUsers(query) {
    if (useMock)
        return mockListUsers(query);
    return request({ method: 'GET', url: '/users', params: query });
}
export function getUser(id) {
    if (useMock)
        return mockGetUser(id);
    return request({ method: 'GET', url: `/users/${id}` });
}
