<template>
    <div>
        <div class="img-container">
            <div v-for="(picture,index) in pictures" :key="index" class="info-box">
                <img :src="picture.src" class="img-item  round-box" />
                <h5 class="img-title big-text">{{picture.title}}</h5>
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
const { pictures } = defineProps<{ pictures: Picture[] }>()
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
        object-fit: cover;
        margin-bottom: 30px;

        .img-item {
            min-height: 15vh;
            max-height: 25vh;

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