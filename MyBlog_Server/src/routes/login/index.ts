import express from 'express';
import { login } from 'src/controller/login';

const loginRouter = express.Router();

// 以下所有路由都是以/login开头的
loginRouter.post('/', login);
export default loginRouter;