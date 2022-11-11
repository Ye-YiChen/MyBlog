import db from '../index';
import { Article } from "src/model/Article";

/**
 * 查询指定用户的文章，按照时间倒序排列
 * @param user_id 用户id
 * @param page 查询的页数 从0开始
 * @param pageSize 每页的文章数
 */
function queryArticlesByUserId(user_id: number, page: number, pageSize: number) {
    return new Promise<Article[]>((resolve, reject) => {
        user_id = parseInt(db.escape(user_id));
        const sql = `select article_id, title, content, pictures, article_category_id, created_at from article where user_id=${user_id} order by created_at desc limit ${(page - 1) * pageSize}, ${pageSize}`;
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
 * 查询指定分类的文章，按照时间倒序排列
 * @param article_category_id 文章分类id
 * @param page 查询的页数 从0开始
 * @param pageSize 每页的文章数
 */
function queryArticlesByCategoryId(article_category_id: number, page: number, pageSize: number) {
    return new Promise<Article[]>((resolve, reject) => {
        article_category_id = parseInt(db.escape(article_category_id));
        const sql = `select article_id, title, content, pictures, user_id, created_at from article where article_category_id=${article_category_id} order by created_at desc limit ${(page - 1) * pageSize}, ${pageSize}`;
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

function addArticle(user_id: number, article: Article) {
    return new Promise((resolve, reject) => {
        const { article_category_id, title, content, pictures, custom, tags } = article;
        if (!article_category_id) {
            reject('article_category_id empty error');
            return;
        }
        const sql = `insert into article (user_id, article_category_id, title, content, pictures, custom, tags, created_at) values (${user_id}, ${article_category_id}, '${title ?? ""}', '${content ?? ""}', '${pictures ?? ""}',${custom ?? ""},'${tags ?? ""}',now())`;
        db.query(sql, (err: Error, result: any) => {
            if (err) {
                console.log(err)
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}


export { queryArticlesByUserId, queryArticlesByCategoryId, queryArticleInfo, addArticle };