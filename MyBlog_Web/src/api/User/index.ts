import type { User } from '@/type/User';
import { request } from "@/api";
function getUserInfoByToken(): Promise<User> {
    return request({
        url: `/user/token`,
        method: 'get',
    });
}
function putUserInfo(data: User): Promise<User> {
    return request({
        url: `/user/${data.user_id}/info`,
        method: 'put',
        data,
    });
}

export { getUserInfoByToken, putUserInfo };