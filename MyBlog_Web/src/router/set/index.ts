import biographyRouter from './biography'
import categoryRouter from './category'
import articleRouter from './articles'

export default [
    {
        path: 'articles',
        name: 'Articles',
        component: () => import('page/Set/Articles/App.vue'),
        redirect: { name: 'ArticlesList' },
        children: [
            ...articleRouter
        ]
    },
    {
        path: 'biography',
        name: 'Biography',
        component: () => import('page/Set/Biography/App.vue'),
        redirect: { name: 'BiographyList' },
        children: [
            ...biographyRouter
        ]
    },
    {
        path: 'category',
        name: 'Category',
        component: () => import('page/Set/Category/App.vue'),
        redirect: { name: 'CategoryList' },
        children: [
            ...categoryRouter
        ]
    }
]
