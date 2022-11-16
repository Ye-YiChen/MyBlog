import express from 'express';
import { getArticleInfo,deleteArticle, postView} from 'src/controller/article';

const articleRouter = express.Router();

articleRouter.get('/:article_id/info', getArticleInfo);
articleRouter.delete('/:article_id', deleteArticle);
export default articleRouter;