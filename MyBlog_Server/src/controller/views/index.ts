import { Request, Response } from "express";
import { addLike, countLikesInArticle, countLikesInUser, queryLike, reAddLike, removeLike } from "src/db/likes";
import { countViewsInArticle, countViewsInUser } from "src/db/views";
import { SuccessResult, ErrorResult } from "src/model/Result";


async function countViewsInUserController(req: Request, res: Response) {
    const { user_id } = req.params;
    if (!user_id) {
        res.json(ErrorResult('user_id empty error'));
        return;
    }
    try {
        const data = await countViewsInUser(parseInt(user_id));
        res.json(SuccessResult(data));
        return;
    }
    catch (error) {
        res.json(ErrorResult('count views error'));
        return;
    }
}

async function countViewsInArticleController(req: Request, res: Response) {
    const { article_id } = req.params;
    if (!article_id) {
        res.json(ErrorResult('article_id empty error'));
        return;
    }
    try {
        const data = await countViewsInArticle(parseInt(article_id));
        console.log(data)
        res.json(SuccessResult(data));
    }
    catch (error) {
        res.json(ErrorResult('count like error'));
        return;
    }
}

export { countViewsInUserController, countViewsInArticleController }