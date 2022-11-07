export default [
    {
        path: 'add',
        name: 'ArticlesAdd',
        component: () => import('page/Set/Articles/Add/App.vue')
    },
    {
        path: 'list',
        name: 'ArticlesList',
        component: () => import('page/Set/Articles/List/App.vue')
    }
]
