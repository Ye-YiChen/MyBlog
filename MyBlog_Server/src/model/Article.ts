interface Article {
    [key: string]: any;
    article_id: number;
    title: string;
    content: string;
    pictures: string;
    views: number; // 浏览量
    likes: number; // 点赞量
    tags: string;
    custom: number; // 0: 默认不展示, 其他：自定义首页展示
    article_category_id: number;
    created_at: string;
    updated_at: string;
    deleted_at: string;
}

enum ArticleCustom {
    Default = 0,
    Custom = 1
}

export { Article, ArticleCustom };