<template>
    <Login>
        <div class="main-box">
            <div class="title">
                <h2>MyBlog</h2>
                <h4>记录生活的点点滴滴</h4>
            </div>
            <div class="login-box">
                <a-menu mode="horizontal" :default-selected-keys="['1']" class="operate-choice">
                    <a-menu-item key="1">
                        <h5>密码登录</h5>
                    </a-menu-item>
                </a-menu>
                <a-form :model="form" layout="vertical">
                    <a-form-item field="name" required hide-asterisk>
                        <a-input v-model="form.name" placeholder="please enter your username..." size="large">
                            <template #prefix>
                                <icon-user />
                            </template>
                        </a-input>
                    </a-form-item>
                    <a-form-item field="password" required hide-asterisk>
                        <a-input-password v-model="form.password" placeholder="please enter your password..."
                            size="large" allow-clear>
                            <template #prefix>
                                <icon-lock />
                            </template>
                        </a-input-password>
                    </a-form-item>
                    <a-form-item field="isOK">
                        <a-checkbox v-model="form.isOK">
                            LET'S ROCK!
                        </a-checkbox>
                    </a-form-item>
                    <a-form-item>
                        <a-button shape="round" size="large" type="primary" long :disabled="!form.isOK"
                            @click.enter="submit">Submit
                        </a-button>
                    </a-form-item>
                </a-form>
            </div>
        </div>
    </Login>

</template>

<script setup lang='ts'>
import Login from '@/layouts/Login.vue';
import { ref, reactive, computed } from 'vue';
import { UserLogin } from '@/api/Login';
import { Message, Notification } from '@arco-design/web-vue';
import { useUserStore } from '@/stores/user'
import { goRoute } from '@/utils/goRoute';
const userStore = useUserStore();
// 这里开启了实验性的setup语法，所以可以直接解构赋值
const { setUser } = userStore;

const form = reactive({
    name: '',
    password: '',
    isOK: false
});
const isFormFill = computed(() => {
    return form.name !== '' && form.password !== '';
})
async function submit() {
    if (!form.isOK) {
        Message.warning('请先同意协议！');
        return;
    }
    if (!isFormFill.value) {
        Message.warning('请填写完整的表单！');
        return;
    }
    const { data } = await UserLogin(form.name, form.password);
    setUser(data);
    window.localStorage.setItem('token', data.token);
    goRoute('Home');
    Notification.success({
        title: '登录成功',
        content: '欢迎回来！'
    });
}
</script>

<style scoped lang='less'>
.login-page {
    height: 100%;
    width: 100%;
}

h2,
h4 {
    margin: 0;
}

.main-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;

    h2 {
        font-size: 50px;
        margin-bottom: 2vh;
    }

    h4 {
        font-size: 20px;
        letter-spacing: 0.5vw;
        font-weight: 400;
    }

    h5 {
        margin: 0;
        font-size: 20px;
        letter-spacing: .5px;
        color: black;

    }

    .login-box {
        box-sizing: border-box;
        margin-top: 5vh;
        min-width: 400px;
        max-width: 30vw;
        background-color: rgba(255, 255, 255, 0.8);
        padding: 24px 32px 8px;
        border-radius: 10px;
        color: black;

        .operate-choice {
            background-color: transparent;
            border-bottom: 1px solid #e8e8e8;
            margin-bottom: 30px;
        }

        // 修改 acro-design的input的样式
        &:deep(.arco-input-wrapper) {
            background-color: rgba(255, 255, 255, 0.5);
        }
    }
}
</style>