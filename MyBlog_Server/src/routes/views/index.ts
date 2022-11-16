import express from 'express';
import { postView } from 'src/controller/article';
import { getViewsInUser } from 'src/controller/user';

const viewRouter = express.Router();

/*** 以下所有路由都是以/view开头的 ***/
viewRouter.get('/user/:user_id/count',getViewsInUser)
viewRouter.post('/article/:article_id', postView);



export default viewRouter;