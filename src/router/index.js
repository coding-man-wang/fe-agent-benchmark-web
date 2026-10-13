import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layouts/AppLayout.vue';
import DashboardView from '@/views/DashboardView.vue';
import UsersView from '@/views/UsersView.vue';
import UserDetailView from '@/views/UserDetailView.vue';
import OrdersView from '@/views/OrdersView.vue';
import ForbiddenView from '@/views/ForbiddenView.vue';
export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: AppLayout, children: [
                { path: '', component: DashboardView },
                { path: 'users', component: UsersView },
                { path: 'users/:id', component: UserDetailView },
                { path: 'orders', component: OrdersView },
                { path: '403', component: ForbiddenView },
            ] },
    ],
});
