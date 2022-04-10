import {createRouter, createWebHistory} from "vue-router";
import Index from "../components/views/Index";

const access = {
    guestOnly: {
        authorized: false,
        guest: true,
    },
    adminOnly: {
        authorized: true,
        guest: false,
        admin: true,
    }
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
            access: access.guestOnly,
        },
    },
    {
        name: 'login',
        path: '/login',
        component: () => import("../components/views/Login"),
        meta: {
            access: access.guestOnly,
        },
    },
    {
        path: '/admin/dashboard',
        name: 'admin.dashboard',
        alias: '/admin',
        component: () => import("../components/views/admin/Dashboard"),
        meta: {
            layout: 'admin-layout',
            access: access.adminOnly,
        },
    },
    {
        path: '/admin/goods',
        name: 'admin.goods',
        component: () => import("../components/views/admin/Goods"),
        meta: {
            layout: 'admin-layout',
            access: access.adminOnly,
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: 'link-active',
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
                } else if (
                    route.meta.access.admin && (
                    !store.state.auth.authorized ||
                    !store.state.auth.user ||
                    !store.state.auth.user.isAdmin))
                {
                    next(false);
                    return;
                }
            }
            next();
        });
    });
}

export default router;
