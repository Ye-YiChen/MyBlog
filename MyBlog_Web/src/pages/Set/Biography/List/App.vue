<template>
    <ContentBox class="blog-box" title="个人简介">
        <a-descriptions  size="large" bordered :column="2">
            <a-descriptions-item v-for="item of data" :label="item.label">
                <div v-if="item.type === 'text'">
                    <span class="big-text">{{ item.value }}</span>
                </div>
                <div v-else-if="item.type === 'image'">
                    <a-image width="100" height="100" :src="item.value" />
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
import { useUserStore } from '@/stores/user';
import { computed } from 'vue';
const { user } = useUserStore();
console.log(user)
const data = computed(() => {
    return [
        {
            label: '昵称',
            value: user.username,
            type: 'text',
        },
        {
            label: '头像',
            value: user.avatar,
            type: 'image'
        },
        {
            label: '个性签名',
            value: user.description,
            type: 'text',
        },
        {
            label: '邮箱',
            value: user.email,
            type: 'text',
        },
        {
            label: 'QQ',
            value: user.QQ,
            type: 'text',
        },
        {
            label: 'wechat',
            value: user.wechat,
            type: 'image',
        },
        {
            label: 'Github',
            value: user.github,
            type: 'link',
        },

        {
            label: '赞赏码',
            value: user.donation,
            type: 'image',
        },
        {
            label: '注册日期',
            value: new Date(user.created_at!).toLocaleString(),
            type: 'text'
        }
    ]
})
// console.log(data)
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