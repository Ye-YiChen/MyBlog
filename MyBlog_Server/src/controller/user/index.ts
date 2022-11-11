import { Request, Response } from "express";
import { queryUserInfo, updateUserInfo } from "src/db/user";
import { SuccessResult, ErrorResult } from "src/model/Result";
import { User } from "src/model/User";

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

async function putUserInfo(req: Request, res: Response) {
    const { user_id } = req.params;
    const user: User = req.body;
    const { affectedRows } = await updateUserInfo(parseInt(user_id), user);
    if (affectedRows === 0) {
        res.json(ErrorResult('user_id error'));
        return;
    }
    res.json(SuccessResult('ok'));
}

export { getUserInfo, putUserInfo }