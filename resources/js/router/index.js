import {createRouter, createWebHistory} from "vue-router";
import Index from "../components/views/Index";

const access = {
    guestOnly: {
        authorized: false,
        guest: true,
    },
}

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
            access: access.guestOnly,
        },
    },
    {
        name: 'login',
        path: '/login',
        component: () => import("../components/views/Login"),
        meta: {
            layout: 'dark-layout',
            access: access.guestOnly,
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export const addFirewall = function (store) {
    router.beforeEach((to, from, next) => {
        to.matched.forEach(route => {
            if (route.meta.access) {
                if (route.meta.access.authorized && !store.state.auth.authorized) {
                    next({name: 'login'});
                    return;
                } else if (route.meta.access.guest && store.state.auth.authorized) {
                    next(false);
                    return;
                }
            }
            next();
        });
    });
}

export default router;
