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

function getArticleCountInUser(user_id: number) {
    return request({
        url: `/user/${user_id}/count`,
        method: 'get',
    });
}


function getLikesCountByUserId(user_id: number) {
    return request({
        url: `/likes/user/${user_id}/count`,
        method: 'get',
    });
}

function getViewsCountByUserId(user_id: number) {
    return request({
        url: `/views/user/${user_id}/count`,
        method: 'get',
    });
}
export {
    getUserInfoByToken,
    putUserInfo,
    getArticleCountInUser,
    getLikesCountByUserId,
    getViewsCountByUserId
};