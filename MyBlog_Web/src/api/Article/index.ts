import { request } from "@/api";
import type { Article } from "@/type/Article";
import { useUserStore } from "@/stores/user";
function getArticlesByUserId(user_id: number, page: number, pageSize: number) {
    return request({
        url: `/user/${user_id}/articles`,
        method: "get",
        params: {
            page,
            pageSize
        }
    });
}

function postArticle(data: Article) {
    const { user } = useUserStore();
    return request({
        url: `user/${user.user_id}/article`,
        method: "post",
        data
    });
}

function getArticlesByUserIdWithCategory(user_id: number, page: number, pageSize: number) {
    return request({
        url: `/detail/user/${user_id}/article/list`,
        method: "get",
        params: {
            page,
            pageSize
        }
    });
}

function getArticleByArticleIdWithCategory(article_id: number) {
    return request({
        url: `/detail/article/${article_id}`,
        method: "get"
    });
}


function deleteArticleByArticleId(article_id: number) {
    return request({
        url: `/article/${article_id}`,
        method: "delete"
    });
}

function postLikesByArticleId(user_id: number, article_id: number) {
    return request({
        url: `/likes/user/${user_id}/article/${article_id}`,
        method: "post"
    });
}

function deleteLikesByArticleId(user_id: number, article_id: number) {
    return request({
        url: `/likes/user/${user_id}/article/${article_id}`,
        method: "delete"
    });
}

function getLikesByArticleId(user_id: number, article_id: number) {
    return request({
        url: `/likes/user/${user_id}/article/${article_id}`,
        method: "get"
    });
}

function postViewsByArticleId(article_id: number) {
    return request({
        url: `/views/article/${article_id}`,
        method: "post"
    });
}

function getLikesCountByArticleId(article_id: number) {
    return request({
        url: `/likes/article/${article_id}/count`,
        method: "get"
    });
}


export {
    getArticlesByUserId,
    postArticle,
    getArticlesByUserIdWithCategory,
    deleteArticleByArticleId,
    getArticleByArticleIdWithCategory,
    postLikesByArticleId,
    deleteLikesByArticleId,
    getLikesByArticleId,
    postViewsByArticleId,
    getLikesCountByArticleId,
};