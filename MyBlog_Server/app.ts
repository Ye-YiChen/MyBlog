import express from 'express';
import loginRouter from 'src/routes/login';
const app = express();
app.use('/login', loginRouter);

// 开启服务
app.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});