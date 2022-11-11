1. ~~莫名其妙报错：`[Vue Router warn]: No match found for location with path "/category/1"` *实际上已经注册了这个动态路由*~~
    > 当有路由name相同时会报以上错误，具有一定的迷惑性 

2. 数据库查询时忘记了判断deleted_at是否为空，导致查询出来的数据可能是已经被软删除的数据。--2022/11/11