import { Request, Response } from "express";
import { addLike, countLikesInArticle, countLikesInUser, queryLike, reAddLike, removeLike } from "src/db/likes";
import { SuccessResult, ErrorResult } from "src/model/Result";

async function addLikeController(req: Request, res: Response) {
    const { article_id, user_id } = req.params;
    let like_id = 0;
    let isLiked = false;
    if (!article_id) {
        res.json(ErrorResult('article_id empty error'));
        return;
    }
    if (!user_id) {
        res.json(ErrorResult('user_id empty error'));
        return;
    }
    // 先查看是否有记录或者已经点赞过了
    try {
        const [data] = await queryLike(parseInt(user_id), parseInt(article_id)) as any;
        if (!data) {
            // 没有记录，添加记录
            await addLike(parseInt(user_id), parseInt(article_id)) as any;
            res.json(SuccessResult(null));
            return;
        } else {
            like_id = data['likes_id'];
            isLiked = !data['deleted_at']
        }

    }
    catch (error) {
        res.json(ErrorResult('add like error'));
        return;
    }
    // 如果已经点赞过了直接退出
    // console.log(like_id)
    // console.log(isLiked)
    if (isLiked) {
        res.json(SuccessResult(`user ${user_id} has liked article ${article_id}`));
        return;
    }
    // 否则再次点赞
    try {
        const data = await reAddLike(like_id);
        res.json(SuccessResult(null));
        return;
    } catch (error) {
        res.json(ErrorResult('add like error:like_id error'));
        return;
    }
}

async function removeLikeController(req: Request, res: Response) {
    const { article_id, user_id } = req.params;
    if (!article_id) {
        res.json(ErrorResult('article_id empty error'));
        return;
    }
    if (!user_id) {
        res.json(ErrorResult('user_id empty error'));
        return;
    }
    try {
        const data = await removeLike(parseInt(user_id), parseInt(article_id));
        res.json(SuccessResult(data));
    } catch (error) {
        res.json(ErrorResult('add remove error'));
        return;
    }

}

async function queryLikeController(req: Request, res: Response) {
    const { article_id, user_id } = req.params;
    if (!article_id) {
        res.json(ErrorResult('article_id empty error'));
        return;
    }
    if (!user_id) {
        res.json(ErrorResult('user_id empty error'));
        return;
    }
    try {
        const [data] = await queryLike(parseInt(user_id), parseInt(article_id)) as any;
        if (!data || data.deleted_at) {
            // 如果没有记录，则data为null
            res.json(SuccessResult(null));
            return;
        } else {
            // 如果有记录，则返回记录
            res.json(SuccessResult(data));
            return;
        }

    }
    catch (error) {
        res.json(ErrorResult('query like error'));
        return;
    }

}

async function countLikesInUserController(req: Request, res: Response) {
    const { user_id } = req.params;
    if (!user_id) {
        res.json(ErrorResult('user_id empty error'));
        return;
    }
    try {
        const data = await countLikesInUser(parseInt(user_id));
        res.json(SuccessResult(data));
    } catch (error) {
        res.json(ErrorResult('count like error'));
        return;
    }
}

async function countLikesInArticleController(req: Request, res: Response) {
    const { article_id } = req.params;
    if (!article_id) {
        res.json(ErrorResult('article_id empty error'));
        return;
    }
    try {
        const data = await countLikesInArticle(parseInt(article_id));
        res.json(SuccessResult(data));
    } catch (error) {
        res.json(ErrorResult('count like error'));
        return;
    }
}

export { addLikeController, removeLikeController, queryLikeController, countLikesInUserController, countLikesInArticleController };