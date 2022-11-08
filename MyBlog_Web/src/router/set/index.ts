import biographyRouter from './biography'
import categoryRouter from './category'
import articleRouter from './articles'

export default [
    {
        path: 'articles',
        name: 'SetArticles',
        component: () => import('page/Set/Articles/App.vue'),
        redirect: { name: 'SetArticlesList' },
        children: [
            ...articleRouter
        ]
    },
    {
        path: 'biography',
        name: 'SetBiography',
        component: () => import('page/Set/Biography/App.vue'),
        redirect: { name: 'SetBiographyList' },
        children: [
            ...biographyRouter
        ]
    },
    {
        path: 'category',
        name: 'SetCategory',
        component: () => import('page/Set/Category/App.vue'),
        redirect: { name: 'SetCategoryList' },
        children: [
            ...categoryRouter
        ]
    }
]
