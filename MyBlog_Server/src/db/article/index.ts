import db from '../index';
import { Article } from "src/model/Article";

/**
 * 查询指定用户的所有文章
 * @param user_id 用户id
 */
function queryArticlesByUserId(user_id: number) {
    return new Promise<Article[]>((resolve, reject) => {
        user_id = parseInt(db.escape(user_id));
        const sql = `select article_id, title, content, pictures, article_category_id, created_at from article where user_id=${user_id}`;
        db.query(sql, (err: Error, result: Article[]) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

/**
 * 查询指定分类的所有文章
 * @param article_category_id 文章分类id
 */
function queryArticlesByCategoryId(article_category_id: number) {
    return new Promise<Article[]>((resolve, reject) => {
        article_category_id = parseInt(db.escape(article_category_id));
        const sql = `select article_id, title, content, pictures, user_id from article, created_at where article_category_id=${article_category_id}`;
        db.query(sql, (err: Error, result: Article[]) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

/**
 * 查询指定文章id的文章详情
 * @param article_id 文章id
 */
function queryArticleInfo(article_id: number) {
    return new Promise<Article[]>((resolve, reject) => {
        article_id = parseInt(db.escape(article_id));
        const sql = `select title, content, pictures, user_id, article_category_id, created_at from article where article_id=${article_id}`;
        db.query(sql, (err: Error, result: Article[]) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

export { queryArticlesByUserId, queryArticlesByCategoryId, queryArticleInfo };