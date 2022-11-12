import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
interface User {
    [key: string]: any;
    user_id?: number;
    username?: string;
    token?: string;
    avatar?: string;
    description?: string;
    email?: string;
    QQ?: string;
    wechat?: string;
    github?: string;
    donation?: string;
    created_at?: string;
}
export const useUserStore = defineStore('user', () => {
    const user = reactive<User>({})

    function setUser(newUser: User) {
        Object.assign(user, newUser)
    }

    const isLogin = computed(() => !!user.token)

    const QQlink = computed(() => {
        let link = ''
        if (user.QQ?.trim()) {
            link = `tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=${user.QQ}&website=www.oicqzone.com`
        }
        return link
    })


    function clearUser() {
        Object.keys(user).forEach(key => {
            user[key] = null
        })
    }
    return { user, setUser, isLogin, clearUser, QQlink }
})
