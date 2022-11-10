[JWT相关参考](https://www.jianshu.com/p/58abb716b5dc)

花了一晚上坚决不用babel（我是猪）：[解决typescript 在 node.js 下使用别名（paths）无效的问题](https://blog.csdn.net/qq_29722281/article/details/115532196)


[不好用的图床](https://www.imagehub.cc/)

图床接口：(侵权删)
```js
url = "https://yzf.qq.com/fsna/kf-file/upload_wx_media"
header={
    "Content-Type":"multipart/form-data"
}
body={
    media_type:image,
    mid:fsna, // fsna 为默认的媒体库  还可以选择的有 fsna  fsna2  fsna3  fsna4  fsna5  fsna6  fsna7  fsna8  fsna9  fsna10
    agentid:'',
    userid:kfh5221fa29cfc019f_h5cded9881fc7d6fdfece5fb364b196123,
    file:[imgFile]
}
```