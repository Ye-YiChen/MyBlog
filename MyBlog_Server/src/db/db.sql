create table tag
(
    tag_id     int auto_increment comment '标签id'
        primary key,
    name       varchar(255) not null,
    created_at datetime     not null,
    updated_at datetime     null,
    deleted_at datetime     null,
    constraint tag_tag_id_uindex
        unique (tag_id)
)
    comment '标签';

create table user
(
    user_id     int auto_increment comment '用户id
'
        primary key,
    username    varchar(255) not null comment '用户名',
    password    varchar(255) not null comment '密码',
    salt        varchar(255) not null,
    avatar      varchar(255) null comment '头像',
    description varchar(255) null,
    email       varchar(255) null,
    QQ          varchar(255) null,
    wechat      varchar(255) null,
    github      varchar(255) null,
    donation    varchar(255) null comment '捐赠收款图片',
    created_at  datetime     not null,
    updated_at  datetime     null,
    deleted_at  datetime     null,
    constraint user_user_id_uindex
        unique (user_id),
    constraint user_username_uindex
        unique (username)
)
    comment '用户表' auto_increment = 2;

create table article_category
(
    article_category_id int auto_increment
        primary key,
    name                varchar(255)      not null,
    description         text              null,
    tags                varchar(255)      null,
    views               int     default 0 not null comment '所有文章的浏览量之和',
    custom              tinyint default 0 not null comment '是否被用户设置为首页展示
0 => 不展示(默认)
else => 展示',
    likes               int     default 0 not null comment '所有文章的点赞量',
    user_id             int               not null,
    created_at          datetime          not null,
    updated_at          datetime          null,
    deleted_at          datetime          null,
    constraint article_category_article_category_id_uindex
        unique (article_category_id),
    constraint article_category_user_user_id_fk
        foreign key (user_id) references user (user_id)
            on update cascade on delete cascade
)
    comment '文章分类' auto_increment = 4;

create table article
(
    article_id          int auto_increment
        primary key,
    title               varchar(255)      not null,
    content             text              null comment '64kb ≈ 32k中文字',
    pictures            varchar(255)      null,
    views               int     default 0 not null comment '浏览量',
    likes               int     default 0 not null comment '点赞数量',
    tags                varchar(255)      null comment '文章标签',
    custom              tinyint default 0 not null comment '是否被用户设置为首页展示
0 => 不展示(默认)
else => 展示',
    user_id             int               not null comment '这篇文章的作者，方便查询',
    article_category_id int               not null,
    created_at          datetime          not null,
    updated_at          datetime          null,
    deleted_at          datetime          null,
    constraint article_article_id_uindex
        unique (article_id),
    constraint article_article_category_article_category_id_fk
        foreign key (article_category_id) references article_category (article_category_id)
            on update cascade on delete cascade,
    constraint article_user_user_id_fk
        foreign key (user_id) references user (user_id)
            on update cascade on delete cascade
)
    auto_increment = 4;

create table comment
(
    comment_id int auto_increment
        primary key,
    article_id int          not null comment '被评论的文章',
    user_id    int          not null comment '评论的人',
    content    varchar(255) not null,
    created_at datetime     not null,
    updated_at datetime     null,
    deleted_at datetime     null,
    constraint comment_comment_id_uindex
        unique (comment_id),
    constraint comment_article_article_id_fk
        foreign key (article_id) references article (article_id)
            on update cascade on delete cascade
)
    comment '评论';

create table picture
(
    picture_id int auto_increment
        primary key,
    url        varchar(255) not null,
    article_id int          not null,
    created_at datetime     not null,
    updated_at datetime     not null,
    deleted_at datetime     not null,
    constraint picture_picture_id_uindex
        unique (picture_id),
    constraint picture_article_article_id_fk
        foreign key (article_id) references article (article_id)
            on update cascade on delete cascade
)
    comment '图片反查库';

