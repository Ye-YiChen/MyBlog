<template>
    <ContentBox class="blog-box" title="修改信息">
        <a-form :model="data" :style="{width:'100%',}" auto-label-width label-align="left">
            <a-form-item v-for="(item,index) in data " :field="item.label" :label="item.label">
                <a-input v-if="item.type==='text' ||item.type==='link'" v-model="item.value"
                    placeholder="please enter your username..." />
                <a-upload v-else-if="item.type==='image'" list-type="picture-card" action="/"
                    :default-file-list="fileList" image-preview :limit="1" :accept="acceptableImageType.join(',')" />
            </a-form-item>
            <!-- <a-form-item> -->
                <a-button html-type="submit" type="primary" shape="round" size="large" long>Submit</a-button>
            <!-- </a-form-item> -->
        </a-form>
    </ContentBox>
</template>

<script setup lang='ts'>
import { reactive } from 'vue';
import ContentBox from '../../../../components/Main/ContentBox/ContentBox.vue';
const fileList = reactive([]);
const acceptableImageType = ['image/png', 'image/jpeg', 'image/gif'];
console.log(acceptableImageType.join(","))
const data = reactive(
    [
        {
            label: '昵称',
            value: 'Socrates',
            type: 'text',
            placeholder: 'please enter your username...'
        },
        {
            label: '头像',
            value: 'https://avatars.githubusercontent.com/u/25154432?v=4',
            type: 'image',
            placeholder: 'please upload your avatar...'
        },
        {
            label: '个性签名',
            value: "YeYiChen's blog",
            type: 'text',
            placeholder: 'please enter your personal message...'
        },
        {
            label: '邮箱',
            value: 'xuph@hdu.edu.cn',
            type: 'text',
            placeholder: 'please enter your email...'
        },
        {
            label: 'QQ',
            value: '1980848702',
            type: 'text',
            placeholder: 'please enter your QQ...'
        },
        {
            label: 'wechat',
            value: '',
            type: 'image',
            placeholder: 'please upload your wechat...'
        },
        {
            label: 'Github',
            value: 'https://github.com/Ye-YiChen/MyBlog',
            type: 'link',
            placeholder: 'please enter your Github...'
        },

        {
            label: '赞赏码',
            value: '',
            type: 'image',
            placeholder: 'please upload your appreciation code...'
        },
    ]
)
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