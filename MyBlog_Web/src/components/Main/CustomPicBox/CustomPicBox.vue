<template>
    <div class="custom-pic-box">
        <div v-for="(pic,index) in picList" :key="index" class="img-box">
            <a-image :src="pic.src" :title="pic.title" :description="pic.description" fit="scale-down"
                class="round-box" />
        </div>

    </div>
</template>

<script setup lang='ts'>
import { toRefs } from 'vue'
// 定义图片格式类型
type PicType = { src: string, title: string, description?: string }
const props = defineProps<{ picList: Array<PicType> }>()
const { picList } = toRefs(props)

</script>

<style scoped lang='less'>
.custom-pic-box {
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: space-around;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    cursor: pointer;

    .img-box {
        display: inline-block;
        margin: 5px;
        width: 45%;
        height: auto;
    }

    :deep(.arco-image-footer-caption-description) {
        margin-top: 5px;
        color: rgb(255, 255, 255, 0.7);
    }
}
</style>