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
/**
 * 随机获取指定文件夹下的一张图片路径
 * @returns dic 图片文件夹路径
 */

function getRandomBgc(dic: string) {
    const imgs = [
        "wallhaven-6ozkzl.jpg",
        "wallhaven-dpl3x3.jpg",
        "wallhaven-e7jj6r.jpg",
        "wallhaven-j3g7yy.jpg",
        "wallhaven-l3xk6q.jpg",
        "wallhaven-m9xyg8.jpg",
        "wallhaven-o59gvl.jpg",
        "wallhaven-v9kw9l.jpg",
        "wallhaven-v9v3r5.jpg",
        "wallhaven-x8ye3z.jpg",
        "wallhaven-y8lqo7.jpg",
        "wallhaven-y86g17.jpg",
        "wallhaven-y8622k.jpg",
        "wallhaven-3zgz2y.png",
        "wallhaven-9mjoy1.png",
        "wallhaven-28p95m.png",
        "wallhaven-57o9j5.png",
        "wallhaven-j3m8y5.png",
        "wallhaven-k7q9m7.png",
        "wallhaven-k7v9yq.png",
        "wallhaven-kx36mq.png",
        "wallhaven-wqve97.png",
        "wallhaven-1ky369.jpg",
        "wallhaven-6oxgp6.jpg",
    ];
    const index = Math.floor(Math.random() * imgs.length);
    return dic + imgs[index];
}
const defaultImg = getRandomBgc("/src/assets/img/");
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