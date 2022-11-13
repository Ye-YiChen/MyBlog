import express from 'express';
import { getUserInfo, putUserInfo, getUserByToken, getTotalInUser } from 'src/controller/user';
import { getArticlesByUserId, postArticle } from 'src/controller/article';
import { getArticleCategoriesByUserId, postArticleCategory } from 'src/controller/articleCategory';

const userRouter = express.Router();

/*** 以下所有路由都是以/user开头的 ***/
userRouter.get('/:user_id/info', getUserInfo);
userRouter.get('/:user_id/articles', getArticlesByUserId);
userRouter.get('/:user_id/articleCategories', getArticleCategoriesByUserId);
userRouter.get('/:user_id/count', getTotalInUser);
userRouter.put('/:user_id/info', putUserInfo);
userRouter.post('/:user_id/article', postArticle);
userRouter.post('/:user_id/articleCategory', postArticleCategory);


userRouter.get('/token', getUserByToken);
export default userRouter;