import jwt from 'jsonwebtoken';

const secret = 'YeYiChen';

/**
 * 生成token 24小时过期
 * @param payload 数据信息
 */
function genToken(payload: object) {
    return new Promise<string>((resolve, reject) => {
        jwt.sign(payload, secret, { expiresIn: '24h' }, (err, token) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(token!);
        });
    })
}

/**
 * 验证token 返回解密后的数据
 * @param token token 
 */
function verifyToken(token: string) {
    return new Promise<string | jwt.JwtPayload>((resolve, reject) => {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(decoded!);
        });
    })
}

export { genToken, verifyToken };