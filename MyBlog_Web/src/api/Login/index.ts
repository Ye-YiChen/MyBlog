import { request } from "@/api";

function UserLogin(username: string, password: string) {
    return request({
        method: 'post',
        url: '/login',
        data: {
            username,
            password
        }
    })
}

export { UserLogin };