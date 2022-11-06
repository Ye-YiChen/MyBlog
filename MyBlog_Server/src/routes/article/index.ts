import express from 'express';
import { getArticleInfo } from 'src/controller/article';

const articleRouter = express.Router();

articleRouter.get('/:article_id/info', getArticleInfo);

export default articleRouter;