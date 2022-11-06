import express from 'express';
import { getArticlesByCategoryId } from 'src/controller/article';
import { getArticleCategoryInfo } from 'src/controller/articleCategory';

const articleCategoryRouter = express.Router();


// 以下所有路由都是以/articleCategory开头的
articleCategoryRouter.get('/:article_category_id/articles', getArticlesByCategoryId);
articleCategoryRouter.get('/:article_category_id/info', getArticleCategoryInfo);

export default articleCategoryRouter;