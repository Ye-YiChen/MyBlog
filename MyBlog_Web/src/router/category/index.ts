export default [{
    path:'/category/:category_id',
    name:'Category',
    component: () => import('page/Category/App.vue')
}]
