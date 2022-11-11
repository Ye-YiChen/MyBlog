import { verifyToken } from 'src/token';
import { Request, Response, NextFunction } from "express";
import { ErrorResult, SuccessResult } from 'src/model/Result';
import { postList } from './config'
import { Jwt, JwtPayload } from 'jsonwebtoken';
// 验证token中间件
async function authToken(req: Request, res: Response, next: NextFunction) {
    // 所有post和put请求都需要验证
    const isNeedAuth = (req.method.toLowerCase() == 'post' || req.method.toLowerCase() == 'put');
    if (!isNeedAuth) {
        next();
        return;
    }
    const token = req.headers.authorization;
    if (!token) {
        res.json(ErrorResult('token not found'));
        return;
    }
    try {
        const data = await verifyToken(token) as JwtPayload;
        // 这里莫名其妙拿不到params，只能从url中拿
        const p_user_id = parseInt(req.url.split('/')[1]);
        // 如果请求的token中的user_id和请求的user_id不一致，说明token不是该用户的
        if (data.user_id !== p_user_id) {
            res.json(ErrorResult('token error'));
            return;
        }
        next();
        return;
    } catch (err) {
        // token验证失败 无权限
        res.status(401).json(ErrorResult('token error'))
        return;
    }
}

export { authToken };
