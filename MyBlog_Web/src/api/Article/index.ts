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
        url: `detail/article/${article_id}`,
        method: "get"
    });
}


function deleteArticleByArticleId(article_id: number) {
    return request({
        url: `article/${article_id}`,
        method: "delete"
    });
}

export { getArticlesByUserId, postArticle, getArticlesByUserIdWithCategory, deleteArticleByArticleId, getArticleByArticleIdWithCategory };