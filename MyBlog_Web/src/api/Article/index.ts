import { request } from "@/api";

function getArticlesByUserId(user_id: number,page: number,pageSize: number) {
    return request({
        url: `/user/${user_id}/articles`,
        method: "get",
        params: {
            page,
            pageSize
        }
    });
}

export { getArticlesByUserId };