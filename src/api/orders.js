import { request } from './requestClient';
import { mockListOrders } from '@/mocks/service';
const useMock = import.meta.env.VITE_API_MODE !== 'remote';
export function listOrders() {
    if (useMock)
        return mockListOrders();
    return request({ method: 'GET', url: '/orders' });
}
