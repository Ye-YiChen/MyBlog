// 所有post请求都需要验证
const postList = new Set([
    '/user',
    '/article',
    '/articleCategory',
])

export { postList }