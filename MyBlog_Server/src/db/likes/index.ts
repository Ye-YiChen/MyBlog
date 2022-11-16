import db from '../index';

/**
 * 查询点赞记录
 * @param user_id 用户id
 * @param article_id 文章id
 */
function queryLike(user_id: number, article_id: number) {
    return new Promise((resolve, reject) => {
        user_id = parseInt(db.escape(user_id));
        article_id = parseInt(db.escape(article_id));
        const sql = `SELECT likes_id , deleted_at FROM likes WHERE user_id=${user_id} AND article_id=${article_id}`;
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

/**
 * 第一次点赞添加点赞记录
 * @param user_id 用户id
 * @param article_id 文章id
 */
function addLike(user_id: number, article_id: number) {
    return new Promise((resolve, reject) => {
        user_id = parseInt(db.escape(user_id));
        article_id = parseInt(db.escape(article_id));
        const sql = `insert into likes (user_id,article_id,created_at) values (${user_id},${article_id},now())`;
        db.query(sql, (err: Error, result: any) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

/**
 * 取消后第二次点赞，恢复点赞记录
 * @param user_id 用户id
 * @param article_id 文章id
 */
function reAddLike(likes_id: number) {
    return new Promise((resolve, reject) => {
        likes_id = parseInt(db.escape(likes_id));
        const sql = `update likes set deleted_at=null where likes_id=${likes_id}`;
        db.query(sql, (err: Error, result: any) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

function removeLike(user_id: number, article_id: number) {
    return new Promise((resolve, reject) => {
        user_id = parseInt(db.escape(user_id));
        article_id = parseInt(db.escape(article_id));
        // 软删除
        const sql = `update likes set deleted_at=now() where user_id=${user_id} and article_id=${article_id}`;
        db.query(sql, (err: Error, result: any) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        }
        );
    });
}

function countLikesInUser(user_id: number) {
    return new Promise<any>((resolve, reject) => {
        user_id = parseInt(db.escape(user_id));
        const sql = `SELECT COUNT(*) AS count FROM likes WHERE user_id=${user_id} AND deleted_at IS NULL`;
        db.query(sql, (err: Error, result: any) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        }
        );
    });
}

function countLikesInArticle(article_id: number) {
    return new Promise<any>((resolve, reject) => {
        article_id = parseInt(db.escape(article_id));
        const sql = `SELECT COUNT(1) AS count FROM likes WHERE article_id=${article_id} AND deleted_at IS NULL`;
        db.query(sql, (err: Error, result: any) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}
export { addLike, removeLike, reAddLike, queryLike, countLikesInUser, countLikesInArticle };