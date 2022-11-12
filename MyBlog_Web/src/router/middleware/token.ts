import type { RouteLocation, NavigationGuardNext } from "vue-router";
import { getUserInfoByToken } from '@/api/User'
import { useUserStore } from '@/stores/user';
async function checkToken(to: RouteLocation, from: RouteLocation, next: NavigationGuardNext) {
    // 如果是登录页面，直接放行
    if (to.name === 'Login') {
        next()
        return;
    }

    const token = localStorage.getItem('token')
    // 如果没有token，跳转到登录页面
    if (!token) {
        next({ name: 'Login' })
    }
    // 如果有token且userStore中没有用户信息，说明是刷新页面，需要重新获取用户信息
    const { data } = await getUserInfoByToken()
    const userStore = useUserStore()
    userStore.setUser({ ...data, token })
    next()
}

export { checkToken }