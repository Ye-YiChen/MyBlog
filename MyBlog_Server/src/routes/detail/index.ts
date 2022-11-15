import express from 'express';
import { getArticlesByUserIdWithCategory, getArticlesByArticleIdWithCategory } from 'src/controller/article/art';
const detailLogin = express.Router();

// 以下所有路由都是以/detail开头的
detailLogin.get('/user/:user_id/article/list', getArticlesByUserIdWithCategory);
detailLogin.get('/article/:article_id', getArticlesByArticleIdWithCategory);
export default detailLogin;