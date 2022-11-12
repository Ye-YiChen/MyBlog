interface User{
    [key: string]: any;
    user_id?: number;
    username?: string;
    password?: string;
    avatar?: string;
    description?: string;
    email?: string;
    QQ?: string;
    wechat?: string;
    github?: string;
    donation?: string;
    created_at?: string;
}
export type{ User };