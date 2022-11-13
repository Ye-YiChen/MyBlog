import express from 'express';
import bodyParser from 'body-parser';
import loginRouter from 'src/routes/login';
import userRouter from 'src/routes/user';
import articleRouter from 'src/routes/article';
import articleCategoryRouter from 'src/routes/articleCategory';
import setLogin from 'src/routes/set';
import { authToken } from 'src/middleware/token';
const app = express();
app.all("*", function (req, res, next) {
  // if ((req.headers.origin as string).toLowerCase() == "http://127.0.0.1:5173") {
  //   //设置允许跨域的域名，*代表允许任意域名跨域
  //   res.header("Access-Control-Allow-Origin", req.headers.origin);
  // }
  // 方便测试，暂时允许所有跨域
  res.header("Access-Control-Allow-Origin", "*");

  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type,authorization");
  //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == 'options')
    res.sendStatus(200);  //让options尝试请求快速结束
  else
    next();
});

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/login', loginRouter);

app.use('/user', authToken, userRouter);

app.use('/article', authToken, articleRouter);

app.use('/articleCategory', authToken, articleCategoryRouter);

app.use('/set', authToken, setLogin);

// 开启服务
app.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});