export default [
    {
        path: 'add',
        name: 'SetArticlesAdd',
        component: () => import('page/Set/Articles/Add/App.vue')
    },
    {
        path: 'list',
        name: 'SetArticlesList',
        component: () => import('page/Set/Articles/List/App.vue')
    }
]
