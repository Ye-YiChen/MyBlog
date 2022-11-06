import express from 'express';
import { getUserInfo } from 'src/controller/login';
import { getArticlesByUserId } from 'src/controller/article';
import { getArticleCategoriesByUserId } from 'src/controller/articleCategory';

const userRouter = express.Router();

// 以下所有路由都是以/user开头的
userRouter.post('/:user_id/info', getUserInfo);
userRouter.get('/:user_id/articles', getArticlesByUserId);
userRouter.get('/:user_id/articleCategories', getArticleCategoriesByUserId);
export default userRouter;