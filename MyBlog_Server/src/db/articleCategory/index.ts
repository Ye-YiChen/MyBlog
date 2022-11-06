import db from '../index';
import {ArticleCategory} from "src/model/ArticleCategory";

/**
 * 根据用户id查询用户的所有文章分类,按照创建时间倒序排列
 * @param user_id 用户id
 * @param page 分页页数
 * @param pageSize 每页的文章分类数
 */
function queryArticleCategoriesByUserId(user_id: number, page: number, pageSize: number) {
    return new Promise<ArticleCategory[]>((resolve, reject) => {
        const sql = `select name, description, created_at from article_category where user_id=${user_id} order by created_at desc limit ${(page - 1) * pageSize}, ${pageSize}`;
        db.query(sql, (err: Error, result: ArticleCategory[]) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

/**
 * 根据文章分类id查询文章分类详情,按照创建时间倒序排列
 * @param article_category_id 文章分类id
 * @param page 分页页数
 * @param pageSize 每页的文章分类数
 */
function queryArticleCategoryInfo(article_category_id: number) {
    return new Promise<ArticleCategory[]>((resolve, reject) => {
        const sql = `select name, description, created_at from article_category where article_category_id=${article_category_id} order by created_at desc`;
        db.query(sql, (err: Error, result: ArticleCategory[]) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

export { queryArticleCategoriesByUserId, queryArticleCategoryInfo };