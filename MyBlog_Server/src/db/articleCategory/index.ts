import db from '../index';
import {ArticleCategory} from "src/model/ArticleCategory";

function queryArticleCategoriesByUserId(user_id: number) {
    return new Promise<ArticleCategory[]>((resolve, reject) => {
        const sql = `select article_category_id, name, description, created_at from article_category where user_id=${user_id}`;
        db.query(sql, (err: Error, result: ArticleCategory[]) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

function queryArticleCategoryInfo(article_category_id: number) {
    return new Promise<ArticleCategory[]>((resolve, reject) => {
        const sql = `select name, description, user_id, created_at from article_category where article_category_id=${article_category_id}`;
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