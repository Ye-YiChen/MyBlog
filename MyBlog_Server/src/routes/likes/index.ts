import express from 'express';

import { addLikeController, removeLikeController,queryLikeController, countLikesInUserController, countLikesInArticleController} from 'src/controller/likes';

const articleRouter = express.Router();

articleRouter.get('/user/:user_id/article/:article_id', queryLikeController);
articleRouter.get('/user/:user_id/count', countLikesInUserController);
articleRouter.get('/article/:article_id/count', countLikesInArticleController);
articleRouter.post('/user/:user_id/article/:article_id', addLikeController);
articleRouter.delete('/user/:user_id/article/:article_id', removeLikeController);


export default articleRouter;