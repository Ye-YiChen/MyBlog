import { Request, Response } from "express";
import { queryArticleCategoriesByUserId, queryArticleCategoryInfo, addArticleCategory } from "src/db/articleCategory";
import { ArticleCategory } from "src/model/ArticleCategory";
import { SuccessResult, ErrorResult } from "src/model/Result";


async function getArticleCategoriesByUserId(req: Request, res: Response) {
    const { user_id } = req.params;
    const { page, pageSize } = req.query;
    try {
        const articleCategories = await queryArticleCategoriesByUserId(parseInt(user_id), parseInt(page as string), parseInt(pageSize as string));
        res.json(SuccessResult(articleCategories));
        return;
    } catch {
        res.json(ErrorResult('user_id error'));
        return;
    }
}


async function getArticleCategoryInfo(req: Request, res: Response) {
    const { article_category_id } = req.params;
    try {
        const [articleCategory] = await queryArticleCategoryInfo(parseInt(article_category_id));
        res.json(SuccessResult(articleCategory));
        return;
    } catch {
        res.json(ErrorResult('article_category_id error'));
        return;
    }
}

async function putArticleCategory(req: Request, res: Response) {
    const { user_id } = req.params;
    if(!user_id){
        res.json(ErrorResult('user_id empty error'));
        return;
    }
    const category_info: ArticleCategory = req.body;
    try {
        await addArticleCategory(parseInt(user_id), category_info);
        res.json(SuccessResult(null));
        return;
    } catch {
        res.json(ErrorResult('user_id error'));
        return;
    }
}


export { getArticleCategoriesByUserId, getArticleCategoryInfo, putArticleCategory };