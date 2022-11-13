import express from 'express';
import {getArticlesByUserIdWithCategory} from 'src/controller/article/art';
const setLogin = express.Router();

// 以下所有路由都是以/set开头的
setLogin.get('/:user_id/article/list', getArticlesByUserIdWithCategory);

export default setLogin;