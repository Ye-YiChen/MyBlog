import { Request, Response } from "express";
import { queryArticleCategoriesByUserId,queryArticleCategoryInfo } from "src/db/articleCategory";
import { SuccessResult, ErrorResult } from "src/model/Result";


async function getArticleCategoriesByUserId(req: Request, res: Response) {
    const { user_id } = req.params;
    try {
        const articleCategories = await queryArticleCategoriesByUserId(parseInt(user_id));
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

export { getArticleCategoriesByUserId, getArticleCategoryInfo };