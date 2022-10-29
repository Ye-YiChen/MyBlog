<template>
    <div class="category-box">
        <h4 class="box-title big-text">{{title}}
            <slot name="title" />
        </h4>
        <a-space direction="vertical" class="choice">
            <a-link v-for="(link,index) in linkList" :key="index" :href="link.link" :disabled="link.disabled">
                {{link.text}}</a-link>
        </a-space>
    </div>
</template>

<script setup lang='ts'>
interface Props {
    linkList: Array<{ text: string, link: string, disabled?: boolean }>,
    title: string,
}
const { linkList, title } = defineProps<Props>()
</script>

<style scoped lang='less'>
.category-box {
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgb(0 0 0 / 2%);
}

.choice {
    padding: 20px;
}

.box-title {
    border-bottom: 2px solid #eee;
    margin: 0;
    padding: 15px 20px;
}
</style>