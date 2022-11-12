import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { queryUserInfo, updateUserInfo } from "src/db/user";
import { SuccessResult, ErrorResult } from "src/model/Result";
import { User } from "src/model/User";
import { verifyToken } from "src/token";

/**
 * 从user_id中获取用户信息 试图先从params中获取user_id，如果没有则从token中获取
 * @param req 
 * @param res 
 */
async function getUserInfo(req: Request, res: Response) {
    let { user_id } = req.params;
    try {
        const [userInfo] = await queryUserInfo(parseInt(user_id));
        res.json(SuccessResult(userInfo));
        return;
    } catch {
        res.json(ErrorResult('user_id error'));
        return;
    }
}

async function getUserByToken(req: Request, res: Response) {
    // authorization头中tokne的格式为Bearer token
    const headers = req.headers.authorization!;
    const [_, token] = headers.split(' ');
    const { user_id } = await verifyToken(token) as JwtPayload;
    try {
        const [userInfo] = await queryUserInfo(parseInt(user_id));
        res.json(SuccessResult({...userInfo,user_id}));
        return;
    } catch {
        res.json(ErrorResult('user_id error'));
        return;
    }
}

async function putUserInfo(req: Request, res: Response) {
    const { user_id } = req.params;
    const user: User = req.body;
    console.log(user);
    const { affectedRows } = await updateUserInfo(parseInt(user_id), user);
    if (affectedRows === 0) {
        res.json(ErrorResult('user_id error'));
        return;
    }
    res.json(SuccessResult('ok'));
}



export { getUserInfo, putUserInfo, getUserByToken }