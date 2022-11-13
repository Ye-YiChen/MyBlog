import { Request, Response } from "express";
import { queryArticlesByUserId, } from "src/db/article";
import { queryArticleCategoryInfo } from "src/db/articleCategory";
import { Article } from "src/model/Article";
import { ArticleCategory } from "src/model/ArticleCategory";
import { SuccessResult, ErrorResult } from "src/model/Result";


async function getArticlesByUserIdWithCategory(req: Request, res: Response) {
    const { user_id } = req.params;
    const { page, pageSize } = req.query;
    if (!user_id) {
        res.json(ErrorResult('user_id empty error'));
        return;
    }
    if (!(page && pageSize)) {
        res.json(ErrorResult('page or pageSize empty error'));
        return;
    }
    let articles: Article[];
    try {
        articles = await queryArticlesByUserId(parseInt(user_id), parseInt(page as string), parseInt(pageSize as string));
    } catch {
        res.json(ErrorResult('user_id error'));
        return;
    }
    // 获取文章分类信息 去重
    const article_category_ids = [...new Set(articles.map(article => article.article_category_id))];
    try {
        const articleCategoryList: ArticleCategory[][] = await Promise.all(article_category_ids.map((id) => queryArticleCategoryInfo(id)))
        console.log(articleCategoryList)
        console.log(1)
        // 合并文章分类信息
        articles = articles.map(article => {
            article.article_category = (articleCategoryList.find(articleCategory => articleCategory[0].article_category_id === article.article_category_id))![0];
            return article;
        });
        res.json(SuccessResult(articles));
    } catch {
        res.json(ErrorResult('article_category_id error'));
        return;
    }

}

export { getArticlesByUserIdWithCategory }