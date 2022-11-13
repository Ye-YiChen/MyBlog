<template>
    <ContentBox class="blog-box" title="修改信息">
        <a-form :model="data" :style="{ width: '100%', }" auto-label-width label-align="left">
            <a-form-item v-for="(item, index) in data " :field="item.label" :label="item.label">
                <a-input v-if="item.type === 'text' || item.type === 'link'" v-model="item.value"
                    placeholder="please enter your username..." />
                <a-upload v-else-if="item.type === 'image'" list-type="picture-card" action="/"
                    v-model:file-list="fileList[item.key]" image-preview :limit="1"
                    :accept="acceptableImageType.join(',')" :auto-upload="false" webkitdirectory draggable />
            </a-form-item>
            <a-button html-type="submit" type="primary" shape="round" size="large" long @click="formSubmit">Submit
            </a-button>
        </a-form>
    </ContentBox>
</template>

<script setup lang='ts'>
import { reactive, computed } from 'vue';
import { useUserStore } from '@/stores/user';
import ContentBox from '@/components/Main/ContentBox/ContentBox.vue';
import type { FileItem } from '@arco-design/web-vue';
import { Notification } from '@arco-design/web-vue';
import { uploadImg } from '@/api/img';
import { putUserInfo } from '@/api/User';
import { goRoute } from '@/utils/goRoute';
const { user, setUser } = useUserStore();
const acceptableImageType = ['image/png', 'image/jpeg', 'image/gif'];
// 类型声明是必要的 不然会报错
const fileList: { [key: string]: any } = reactive({
    avatar: [{
        uid: '-1',
        name: 'avatar',
        url: user.avatar,
    },
    ],
    wechat: [{
        uid: '-1',
        name: 'wechat',
        url: user.wechat,
    },
    ],
    github: [{
        uid: '-1',
        name: 'github',
        url: user.github,
    },
    ],
    donation: [{
        uid: '-1',
        name: 'donation',
        url: user.donation,
    }]
});
const data = reactive(
    [
        {
            label: '昵称',
            key: 'username',
            value: user.username,
            type: 'text',
        },
        {
            label: '头像',
            key: 'avatar',
            value: user.avatar,
            type: 'image'
        },
        {
            label: '个性签名',
            key: 'description',
            value: user.description,
            type: 'text',
        },
        {
            label: '邮箱',
            key: 'email',
            value: user.email,
            type: 'text',
        },
        {
            label: 'QQ',
            key: 'QQ',
            value: user.QQ,
            type: 'text',
        },
        {
            label: 'wechat',
            key: 'wechat',
            value: user.wechat,
            type: 'image',
        },
        {
            label: 'Github',
            key: 'github',
            value: user.github,
            type: 'link',
        },

        {
            label: '赞赏码',
            key: 'donation',
            value: user.donation,
            type: 'image',
        },
    ]
)


async function formSubmit() {
    const formData = {
        user_id: user.user_id,
        username: data[0].value,
        avatar: data[1].value,
        description: data[2].value,
        email: data[3].value,
        QQ: data[4].value,
        wechat: data[5].value,
        github: data[6].value,
        donation: data[7].value,
    }
    /* 以下不用Promise.all 是因为不知道如何简化判断文件是否修改 */
    try {
        formData.avatar = fileList.avatar[0].file ? await uploadImg(fileList.avatar[0].file) : data[1].value;
        formData.wechat = fileList.wechat[0].file ? await uploadImg(fileList.wechat[0].file) : data[5].value;
        formData.github = fileList.github[0].file ? await uploadImg(fileList.github[0].file) : data[6].value;
        formData.donation = fileList.donation[0].file ? await uploadImg(fileList.donation[0].file) : data[7].value;
    } catch (error: any) {
        console.log(error.message);
        Notification.error({
            title: '图片上传失败1',
            content: error.message,
        });
        return;
    }
    await putUserInfo(formData);
    Notification.success({
        title: '修改成功',
        content: '个人信息修改成功！',
    });
    goRoute('SetBiographyList');
    setUser(formData);
}
</script>

<style scoped lang='less'>
.blog-box {
    box-sizing: border-box;
    margin: 0;
    margin-left: 1vw;
    height: auto;
    height: 100%;
}
</style>