import db from '../index';
function countViewsInUser(user_id: number) {
    return new Promise<any>((resolve, reject) => {
        // user_id = parseInt(db.escape(user_id));
        console.log(user_id)
        const sql = `SELECT count(1) AS count FROM article WHERE user_id=${user_id} AND deleted_at is NULL `;
        db.query(sql, (err: Error, result: any) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result[0]);
        });
    });
}

function countViewsInArticle(article_id: number) {
    return new Promise<any>((resolve, reject) => {
        article_id = parseInt(db.escape(article_id));
        // 直接读取article表中的views字段
        const sql = `SELECT views FROM article WHERE article_id=${article_id} AND deleted_at is NULL `;
        db.query(sql, (err: Error, result: any) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result[0]);
        });
    });
}

export { countViewsInUser, countViewsInArticle }