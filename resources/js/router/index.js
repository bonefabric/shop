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
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
