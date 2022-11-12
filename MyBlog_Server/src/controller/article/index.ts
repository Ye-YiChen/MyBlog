import { Request, Response } from "express";
import { queryArticlesByUserId, queryArticlesByCategoryId, queryArticleInfo, addArticle, removeArticle } from "src/db/article";
import { Article } from "src/model/Article";
// import { Article } from "src/model/Article";
import { SuccessResult, ErrorResult } from "src/model/Result";

/**
 * 获取指定用户的所有文章列表
 * @param req 请求参数
 * @param res 响应参数
 */
async function getArticlesByUserId(req: Request, res: Response) {
    const { user_id } = req.params;
    const { page, pageSize } = req.query;
    if(!user_id){
        res.json(ErrorResult('user_id empty error'));
        return;
    }
    if(!(page && pageSize)){
        res.json(ErrorResult('page or pageSize empty error'));
        return;
    }
    try {
        const articles = await queryArticlesByUserId(parseInt(user_id), parseInt(page as string), parseInt(pageSize as string));
        res.json(SuccessResult(articles));
        return;
    } catch {
        res.json(ErrorResult('user_id error'));
        return;
    }

}

/**
 * 获取指定分类的所有文章列表
 * @param req 请求参数
 * @param res 响应参数
 */
async function getArticlesByCategoryId(req: Request, res: Response) {
    const { article_category_id } = req.params;
    const { page, pageSize } = req.query;
    try {
        const articles = await queryArticlesByCategoryId(parseInt(article_category_id), parseInt(page as string), parseInt(pageSize as string));
        res.json(SuccessResult(articles));
        return;
    } catch {
        res.json(ErrorResult('article_category_id error'));
        return;
    }
}

/**
 * 获取指定文章的详情
 * @param req 请求参数
 * @param res 响应参数
 */
async function getArticleInfo(req: Request, res: Response) {
    const { article_id } = req.params;
    try {
        const [article] = await queryArticleInfo(parseInt(article_id));
        res.json(SuccessResult(article));
        return;
    } catch {
        res.json(ErrorResult('article_id error'));
        return;
    }
}

async function putArticle(req: Request, res: Response) {
    const { user_id } = req.params;
    const { article_category_id } = req.body;
    if (!user_id) {
        res.json(ErrorResult('user_id empty error'));
        return;
    }
    if (!article_category_id) {
        res.json(ErrorResult('article_category_id empty error'));
        return;
    }
    const article_info: Article = req.body;
    try {
        await addArticle(parseInt(user_id), article_info);
        res.json(SuccessResult(null));
        return;
    } catch {
        res.json(ErrorResult('user_id error'));
        return;
    }
}

async function deleteArticle(req: Request, res: Response) {
    const { article_id } = req.params;
    try {
        await removeArticle(parseInt(article_id));
        res.json(SuccessResult(null));
        return;
    } catch {
        res.json(ErrorResult('article_id error'));
        return;
    }
}




export { getArticlesByUserId, getArticlesByCategoryId, getArticleInfo, putArticle, deleteArticle };