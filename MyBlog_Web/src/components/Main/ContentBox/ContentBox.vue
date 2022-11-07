<template>
    <div class="content-box">
        <div class="title" v-if="title">
            <h3 class="category-title huge-text">{{ title }}</h3>
            <a-divider />
        </div>
        <slot />
    </div>
</template>

<script setup lang='ts'>
interface Props {
    title?: string
}
const { title } = defineProps<Props>()
</script>

<style scoped lang='less'>
.category-title {
    position: absolute;
    top: 0;
}

.content-box {
    position: relative;
    background-color: #fff;
    margin: 0 20px 30px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgb(0 0 0 / 2%);
    overflow: hidden;
}
</style>
