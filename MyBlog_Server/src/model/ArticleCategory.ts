interface ArticleCategory{
    article_category_id: number;
    name: string;
    description: string;
    tags: string;
    view: number; // 浏览量
    like: number; // 点赞量
    custom: number; // 0: 默认不展示, 其他：自定义首页展示
    user_id: number;
    created_at: string;
    updated_at: string;
    deleted_at: string;
}

enum ArticleCategoryCustom{
    Default = 0,
    Custom = 1
}

export { ArticleCategory,ArticleCategoryCustom };