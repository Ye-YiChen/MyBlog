<template>
    <ContentBox class="blog-box">
        <a-descriptions :data="data" title="个人简介" size="large" bordered :column="2">
            <a-descriptions-item v-for="item of data" :label="item.label">
                <div v-if="item.type === 'text'">
                    <span class="big-text">{{ item.value }}</span>
                </div>
                <div v-else-if="item.type === 'image'">
                    <a-avatar :src="item.label" />
                </div>

                <div v-else-if="item.type === 'link'">
                    <a-link :href="item.value" icon target="_blank">{{ item.label }}</a-link>
                </div>
            </a-descriptions-item>
        </a-descriptions>
    </ContentBox>
</template>

<script setup lang='ts'>
import ContentBox from '@/components/Main/ContentBox/ContentBox.vue';

const data = [
    {
        label: '昵称',
        value: 'Socrates',
        type: 'text',
    },
    {
        label: '头像',
        value: 'https://avatars.githubusercontent.com/u/25154432?v=4',
        type: 'image'
    },
    {
        label: '联系方式',
        value: '123-1234-1234',
        type: 'text',
    },
    {
        label: '个性签名',
        value: "YeYiChen's blog",
        type: 'text',
    },
    {
        label: '邮箱',
        value: 'xuph@hdu.edu.cn',
        type: 'text',
    },
    {
        label: 'QQ',
        value: '1980848702',
        type: 'text',
    },
    {
        label: 'wechat',
        value: '',
        type: 'text',
    },
    {
        label: 'Github',
        value: 'https://github.com/Ye-YiChen/MyBlog',
        type: 'link',
    },

    {
        label: '赞赏码',
        value: '',
        type: 'text',
    },
    {
        label: '注册日期',
        value: (new Date()).toString(),
        type: 'text'
    }
];
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