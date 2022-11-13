import db from '../index';
import { ArticleCategory, ArticleCategoryCustom } from "src/model/ArticleCategory";

/**
 * 根据用户id查询用户的所有文章分类,按照创建时间倒序排列
 * @param user_id 用户id
 * @param page 分页页数
 * @param pageSize 每页的文章分类数
 */
function queryArticleCategoriesByUserId(user_id: number, page: number, pageSize: number) {
    return new Promise<ArticleCategory[]>((resolve, reject) => {
        const sql = `select article_category_id, name, description, tags, views, likes, custom, created_at from article_category where user_id=${user_id} and deleted_at is null  order by created_at desc limit ${(page - 1) * pageSize}, ${pageSize}`;
        db.query(sql, (err: Error, result: ArticleCategory[]) => {
            if (err) {
                console.log(err)
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
 */
function queryArticleCategoryInfo(article_category_id: number) {
    return new Promise<ArticleCategory[]>((resolve, reject) => {
        const sql = `select article_category_id, name, description, tags, views, likes, custom, created_at from article_category where article_category_id=${article_category_id} and deleted_at is null  order by created_at desc`;
        console.log(sql)
        db.query(sql, (err: Error, result: ArticleCategory[]) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

function addArticleCategory(user_id: number, category_info: ArticleCategory) {
    return new Promise<ArticleCategory>((resolve, reject) => {
        // 为空的字段默认
        const { name, description, tags, views, likes, custom } = category_info;
        const sql = `insert into article_category (user_id,name,description,tags,custom,created_at) values (${user_id},'${category_info.name ?? ""}','${category_info.description ?? ""}','${category_info.tags ?? "[]"}',${category_info.custom ?? ArticleCategoryCustom.Default},now())`;
        console.log(sql)
        db.query(sql, (err: Error, result: ArticleCategory) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

function removeArticleCategory(article_category_id: number) {
    return new Promise<ArticleCategory>((resolve, reject) => {
        const sql = `update article_category set deleted_at=now() where article_category_id=${article_category_id}`;
        db.query(sql, (err: Error, result: ArticleCategory) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

function countArticleInArticleCategory(article_category_id: number) {
    return new Promise<number>((resolve, reject) => {
        const sql = `select count(*) as count from article where article_category_id=${article_category_id} and deleted_at is null`;
        db.query(sql, (err: Error, result: any) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result[0].count);
        });
    });
}
export { queryArticleCategoriesByUserId, queryArticleCategoryInfo, addArticleCategory, removeArticleCategory, countArticleInArticleCategory };