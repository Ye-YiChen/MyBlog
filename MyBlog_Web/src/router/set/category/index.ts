export default [
    {
        path: 'list',
        name: 'SetCategoryList',
        component: () => import('page/Set/Category/List/App.vue')
    },
    {
        path: 'add',
        name: 'SetCategoryAdd',
        component: () => import('page/Set/Category/Add/App.vue')
    }
]
