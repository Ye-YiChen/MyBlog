export default [
    {
        path: 'list',
        name: 'CategoryList',
        component: () => import('page/Set/Category/List/App.vue')
    },
    {
        path: 'add',
        name: 'CategoryAdd',
        component: () => import('page/Set/Category/Add/App.vue')
    }
]
