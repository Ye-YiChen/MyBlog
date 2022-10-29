<template>
    <div>
        <div class="img-container">
            <div v-for="(picture,index) in pictures" :key="index" class="info-box">
                <img :src="picture.src" class="img-item  round-box" />
                <h5 class="img-title">{{picture.title}}</h5>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { toRefs } from 'vue'
interface Picture {
    src: string;
    link: string;
    title: string;
}
const props = defineProps<{ pictures: Picture[] }>()
const { pictures } = toRefs(props)
</script>

<style scoped lang='less'>
.img-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .info-box {
        display: flex;
        flex-direction: column;
        width: 45%;
        object-fit: contain;
        margin-bottom: 20px;

        .img-item {
            height: 120px;

        }

        .img-title {
            display: inline-block;
            margin: 10px 0 0;
            text-align: center;
            color: #888;
        }
    }

}
</style>