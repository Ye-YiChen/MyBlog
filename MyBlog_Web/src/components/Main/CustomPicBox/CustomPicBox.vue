<template>
    <div class="custom-pic-box">
        <a-image :src="picture.src" fit="fill" class="img-box round-box " />
        <a-typography class="text-box">
            <a-typography-title :style="{
                margin:0,
                textAlign: 'center',
            }" :heading="3" ellipsis>
                {{picture.title}}
            </a-typography-title>
            <a-typography-paragraph :ellipsis="{
              rows: 6,
              showTooltip: true,
              css: true
            }">
                {{picture.description?.repeat(100)}}
            </a-typography-paragraph>
        </a-typography>
    </div>
</template>

<script setup lang='ts'>
import { toRefs } from 'vue'
// 定义图片格式类型
interface Picture { src: string, title: string, description?: string }
// type PicType = { src: string, title: string, description?: string }
const props = defineProps<{ picture: Picture }>()
const { picture } = toRefs(props)
// console.log(picture.value)

</script>

<style scoped lang='less'>
.custom-pic-box {
    display: flex;
    justify-content: space-between;
    // height: 20vh;
    overflow: auto;


    .img-box {
        flex: 1;
    }

    :deep(.arco-image-footer-caption-description) {
        margin-top: 5px;
        color: rgb(255, 255, 255, 0.7);
    }

    .text-box {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin: 0 20px;
        // overflow: hidden;
    }
}
</style>