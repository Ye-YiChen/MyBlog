import db from '../index';
import { User } from "src/model/User";
/**
 * 根据用户名查询用户密码信息（登录）
 * @param username 用户名 唯一字段
 */
function queryUserLogin(username: string) {
    return new Promise<User[]>((resolve, reject) => {
        username = db.escape(username);
        const sql = `select user_id, password from user where username=${username} and deleted_at is null `;
        db.query(sql, (err: Error, result: User[]) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}


/**
 * 根据用户id查询用户信息
 * @param user_id 用户id 唯一字段
 * @returns user_id => username/avatar/email/QQ/wechat/github/donation
 */
function queryUserInfo(user_id: number) {
    return new Promise<User[]>((resolve, reject) => {
        user_id = parseInt(db.escape(user_id));
        const sql = `SELECT username, avatar, email, QQ, wechat, github, donation FROM user WHERE user_id=${user_id} and deleted_at is null `;
        db.query(sql, (err: Error, result: User[]) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

/**
 * 全量更新用户信息
 * @param user_id 用户id
 * @param user 用户信息
 */
function updateUserInfo(user_id: number, user: User) {
    return new Promise<any>((resolve, reject) => {
        user_id = parseInt(db.escape(user_id));
        // 如果有值就更新，没有值就不更新
        const { username, avatar, email, QQ, wechat, github, donation } = user;
        const sql = `UPDATE user SET username=${username ? db.escape(username) : 'username'}, avatar=${avatar ? db.escape(avatar) : 'avatar'}, email=${email ? db.escape(email) : 'email'}, QQ=${QQ ? db.escape(QQ) : 'QQ'}, wechat=${wechat ? db.escape(wechat) : 'wechat'}, github=${github ? db.escape(github) : 'github'}, donation=${donation ? db.escape(donation) : 'donation'} WHERE user_id=${user_id} and deleted_at is null `;
        db.query(sql, (err: Error, result: any) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}


export { queryUserLogin, queryUserInfo, updateUserInfo };