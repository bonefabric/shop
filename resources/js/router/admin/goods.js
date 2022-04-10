export default [
    {
        name: 'admin.goods.index',
        path: '',
        component: () => import("../../components/views/admin/goods/GoodsIndex"),
    },
    {
        name: 'admin.goods.create',
        path: 'create',
        component: () => import("../../components/views/admin/goods/GoodsCreate"),
    },
];
