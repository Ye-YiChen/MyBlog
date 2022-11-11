import { Request, Response } from "express";
import { queryUserLogin, } from "src/db/user";
import { User } from "src/model/User";
// 导入加密模块
import bcryptjs from 'bcryptjs';
import { SuccessResult, ErrorResult } from "src/model/Result";
import { genToken } from "src/token";

async function login(req: Request, res: Response) {
    const { username, password } = req.body as User;
    let password_h, user_id;
    try {
        [{ user_id, password: password_h }] = await queryUserLogin(username);
    } catch {
        res.json(ErrorResult('user not found'));
        return;
    }
    if (!bcryptjs.compareSync(password, password_h)) {
        // 密码错误
        res.json(ErrorResult('password error'));
        return;
    }

    // 生成token
    let token: string;
    try {
        token = await genToken({ user_id });
    } catch (error) {
        res.json(ErrorResult('token error'));
        return;
    }

    res.json(SuccessResult({ user_id, username, token }));
}



export { login, };