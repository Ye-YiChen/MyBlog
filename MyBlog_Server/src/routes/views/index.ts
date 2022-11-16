import express from 'express';
import { postView } from 'src/controller/article';
import { countViewsInArticleController, countViewsInUserController } from 'src/controller/views';

const viewRouter = express.Router();

/*** 以下所有路由都是以/view开头的 ***/
viewRouter.get('/user/:user_id/count',countViewsInUserController)
viewRouter.get('/article/:article_id/count',countViewsInArticleController)
viewRouter.post('/article/:article_id', postView);



export default viewRouter;