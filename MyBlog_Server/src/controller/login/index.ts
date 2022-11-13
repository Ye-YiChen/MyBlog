import { Request, Response } from "express";
import { queryUserLogin, } from "src/db/user";
import { User } from "src/model/User";
// 导入加密模块
import bcryptjs from 'bcryptjs';
import { SuccessResult, ErrorResult } from "src/model/Result";
import { genToken } from "src/token";

async function login(req: Request, res: Response) {
    const { username, password } = req.body as User;
    let userInfo: User;
    try {
        [userInfo] = await queryUserLogin(username);
        console.log(userInfo,111);
    } catch {
        res.json(ErrorResult('user not found'));
        return;
    }
    if (!bcryptjs.compareSync(password, userInfo.password)) {
        // 密码错误
        res.json(ErrorResult('password error'));
        return;
    }

    // 生成token
    let token: string;
    try {
        token = await genToken({ user_id: userInfo.user_id });
    } catch (error) {
        res.json(ErrorResult('token error'));
        return;
    }

    res.json(SuccessResult({ ...userInfo, token }));
}



export { login, };