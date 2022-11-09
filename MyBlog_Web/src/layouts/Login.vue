<template>
    <div class="login" :style="{
        backgroundImage: `url(${url})`
    }">
        <slot />
    </div>
</template>

<script setup lang='ts'>
interface Props {
    bgc?: string;
}
const defaultImg = '/src/assets/img/wallhaven-y8622k.jpg'
const { bgc } = defineProps<Props>();
const url = new URL(bgc ?? defaultImg, import.meta.url).href;
</script>

<style scoped lang='less'>
.login {
    height: 100vh;
    width: 100vw;
    // 默认背景图
    background: url('@/assets/img/wallhaven-725p1y.png') no-repeat center center fixed;
    background-size: cover;
}
</style>