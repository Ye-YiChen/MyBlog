import r from '@/router'
import { useUserStore } from '@/stores/user';
import type { LocationQueryRaw, RouteParamsRaw } from 'vue-router';
/**
 * 跳转到指定页面
 * @param path 跳转路径或者路径名称
 * @param params 跳转params参数 url形如：/path/:id
 * @param query 跳转query参数 url形如：/path?id=1
 */
function goRoute(path: string, params: RouteParamsRaw = {}, query: LocationQueryRaw = {}) {
    const { user } = useUserStore();
    if (JSON.stringify(params) === '{}') {
        params.user_id = user.user_id;
    }
    if (!path) {
        console.warn("path can't be empty!");
        return;
    }
    // 按照路径跳转 （如果名称不存在会触发404）
    if (path.indexOf('/') > -1) {
        r.push({
            path,
            params,
            query
        });
    }
    // 按照名称跳转 （如果名称不存在不会触发404）
    else {
        r.push({
            name: path,
            params,
            query
        });
    }
}

function goBack() {
    r.go(-1);
}

function goLogin() {
    goRoute('Login', {});
}

export { goRoute, goBack, goLogin };