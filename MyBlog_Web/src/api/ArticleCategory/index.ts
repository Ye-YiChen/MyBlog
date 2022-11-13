import { request } from "@/api";
import type { ArticleCategory } from "@/type/ArticleCategory";
import { useUserStore } from "@/stores/user";
function postArticleCategory(data: ArticleCategory) {
    const { user } = useUserStore();
    return request({
        url: `user/${user.user_id}/articleCategory`,
        method: "post",
        data
    });
}

function getArticleCategoriesByUserId(user_id: number, page: number, pageSize: number) {
    return request({
        url: `user/${user_id}/articleCategories`,
        method: "get",
        params: {
            page,
            pageSize
        }
    });
}

function deleteArticleCategory(article_category_id: number) {
    return request({
        url: `articleCategory/${article_category_id}`,
        method: "delete"
    });
}

function getArticleCountInArticleCategory(article_category_id: number) {
    return request({
        url: `articleCategory/${article_category_id}/count`,
        method: "get"
    });
}

export { postArticleCategory, getArticleCategoriesByUserId, deleteArticleCategory,getArticleCountInArticleCategory };