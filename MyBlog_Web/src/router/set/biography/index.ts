export default [
    {
        path: 'list',
        name: 'SetBiographyList',
        component: () => import('page/Set/Biography/List/App.vue')
    },
    {
        path: 'edit',
        name: 'SetBiographyEdit',
        component: () => import('page/Set/Biography/Edit/App.vue')
    }
]

