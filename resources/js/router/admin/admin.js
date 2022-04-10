import goods from "./goods";

export default [
    {
        path: 'dashboard',
        name: 'admin.dashboard',
        alias: '',
        component: () => import("../../components/views/admin/Dashboard"),
    },
    {
        path: 'goods',
        name: 'admin.goods',
        component: () => import("../../components/views/admin/goods/GoodsRoot"),
        children: goods,
    },
];
