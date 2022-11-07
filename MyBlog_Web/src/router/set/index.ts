import biographyRouter from './biography'
import publishRouter from './publish'
import ArticlesRouter from './articles'

export default [{
    path: '/set/:user_id',
    name: 'Set',
    component: () => import('page/Set/App.vue'),
    children:[
        ...biographyRouter,
        ...publishRouter,
        ...ArticlesRouter
    ]
}]
