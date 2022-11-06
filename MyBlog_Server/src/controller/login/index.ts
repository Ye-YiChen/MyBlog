import { Request, Response } from "express";
import { queryUserLogin, queryUserInfo } from "src/db/user";
import { User } from "src/model/User";
// 导入加密模块
import bcryptjs from 'bcryptjs';
import { SuccessResult, ErrorResult } from "src/model/Result";


async function login(req: Request, res: Response) {
    const { username, password } = req.body as User;
    try {
        const [{ user_id, password: password_h }] = await queryUserLogin(username);
        if (bcryptjs.compareSync(password, password_h)) {
            res.json(SuccessResult({ user_id, username }));
        } else {
            res.json(ErrorResult('password error'));
        }
        return;
    } catch {
        res.json(ErrorResult('user not found'));
        return;
    }
}

async function getUserInfo(req: Request, res: Response) {
    const { user_id } = req.params;
    try {
        const [userInfo] = await queryUserInfo(parseInt(user_id));
        res.json(SuccessResult(userInfo));
        return;
    } catch {
        res.json(ErrorResult('user_id error'));
        return;
    }
}

export { login, getUserInfo };