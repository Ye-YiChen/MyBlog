1. ~~莫名其妙报错：`[Vue Router warn]: No match found for location with path "/category/1"` *实际上已经注册了这个动态路由*~~
    > 当有路由name相同时会报以上错误，具有一定的迷惑性 

2. 数据库查询时忘记了判断deleted_at是否为空，导致查询出来的数据可能是已经被软删除的数据。--2022/11/11
   
3. 没有做好接受请求时Response的类型定义，在接收后端响应时全部不得不响应为any（我觉得是不好的）


4. 后端express框架的req:Request的类型无法二次注入自己需要的属性（JavaScript通常会使用的方式），下次应该自己定义这个类型并继承它（Request)


5. 一些只会使用一次的类型在前端反复进行定义有点浪费心力，不知道应该如何解决。