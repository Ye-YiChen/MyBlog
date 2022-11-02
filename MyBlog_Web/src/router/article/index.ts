export default [{
    path:'/article/:article_id',
    name:'Article',
    component: () => import('page/Article/App.vue')
}]
