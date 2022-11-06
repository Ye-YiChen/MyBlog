import db from '../index';
import { User } from "src/model/User";
/**
 * 根据用户名查询用户密码信息（登录）
 * @param username 用户名 唯一字段
 */
function queryUserLogin(username: string) {
    return new Promise<User[]>((resolve, reject) => {
        username = db.escape(username);
        const sql = `select user_id, password from user where username=${username}`;
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
 */
function queryUserInfo(user_id: number) {
    return new Promise<User[]>((resolve, reject) => {
        user_id = parseInt(db.escape(user_id));
        const sql = `select username, avatar, QQ, wechat, github,donation from user where user_id=${user_id}`;
        db.query(sql, (err: Error, result: User[]) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}


export { queryUserLogin, queryUserInfo };