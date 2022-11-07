export default [
    {
        path: 'list',
        name: 'BiographyList',
        component: () => import('page/Set/Biography/List/App.vue')
    },
    {
        path: 'edit',
        name: 'BiographyEdit',
        component: () => import('page/Set/Biography/Edit/App.vue')
    }
]

