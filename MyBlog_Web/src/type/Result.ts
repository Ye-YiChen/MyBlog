/**
 * 响应报文格式
 */
interface Result {
    code: number;
    message: string;
    data?: any;
}
/**
 * 响应报文格式code常量
 */
enum ResultCode {
    Success = 0,
    Error = 1
}
/**
 * 返回请求错误结果
 * @param message 可选错误信息 
 * @param code 可选信息代码 默认为1
 */
function ErrorResult(message?: string, code?: number): Result {
    code = code || ResultCode.Error;
    message = message || 'request error';
    return {
        code,
        message
    }
}

/**
 * 返回请求成功结果
 * @param data 返回数据
 * @param message 可选错误信息
 * @param code 可选信息代码 默认为0
 */
function SuccessResult(data: any, message?: string, code?: number): Result {
    code = code || ResultCode.Success;
    message = message || 'request success';

    return {
        code,
        message,
        data
    }
}
export type { Result };
export { ErrorResult, SuccessResult };