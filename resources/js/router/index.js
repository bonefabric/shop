import {createRouter, createWebHistory} from "vue-router";
import Index from "../components/views/Index";

const routes = [
    {
        name: 'index',
        path: '/',
        component: Index,
    },
    {
        name: 'register',
        path: '/register',
        component: () => import("../components/views/Register"),
        meta: {
            layout: 'dark-layout',
        },
    },
    {
        name: 'login',
        path: '/login',
        component: () => import("../components/views/Login"),
        meta: {
            layout: 'dark-layout',
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
