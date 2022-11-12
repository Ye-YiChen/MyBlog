import express from 'express';
import { getUserInfo, putUserInfo, getUserByToken } from 'src/controller/user';
import { getArticlesByUserId, putArticle } from 'src/controller/article';
import { getArticleCategoriesByUserId, putArticleCategory } from 'src/controller/articleCategory';

const userRouter = express.Router();

/*** 以下所有路由都是以/user开头的 ***/
userRouter.get('/:user_id/info', getUserInfo);
userRouter.get('/:user_id/articles', getArticlesByUserId);
userRouter.get('/:user_id/articleCategories', getArticleCategoriesByUserId);
userRouter.put('/:user_id/info', putUserInfo);
userRouter.put('/:user_id/articles', putArticle);
userRouter.put('/:user_id/articleCategories', putArticleCategory);


userRouter.get('/token', getUserByToken);
export default userRouter;