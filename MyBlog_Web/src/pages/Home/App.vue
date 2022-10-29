<template>
    <div class="home">
        <Home>
            <CustomPicBox :picture="picture" />
            <a-divider orientation="center" class="mid-divider" margin="50px">最新文章</a-divider>
            <ArticleBox :article="article_1" />
            <ArticleBox :article="article_2" />
            <ArticleBox :article="article_3" :divider='false' />
            <a-divider orientation="center" class="mid-divider" margin="50px">旅行日记</a-divider>
            <a-carousel :auto-play="true" :style="{
              width: '100%',
              height: '200px',
              
            }" show-arrow="never" direction="vertical" animationName="fade">
                <a-carousel-item v-for="image in images">
                    <img :src="image" :style="{
                      width: '100%',
                      height:'100%',
                      objectFit:'fill'
                    }" />
                </a-carousel-item>
            </a-carousel>
            <a-divider orientation="center" class="mid-divider" margin="50px">推荐板块</a-divider>
            <RecommendBox :pictures="pictures" />
        </Home>
    </div>
</template>

<script setup lang='ts'>
import Home from '@/layouts/Home.vue'
import CustomPicBox from '../../components/Main/CustomPicBox/CustomPicBox.vue'
import ArticleBox from '../../components/Main/ArticleBox/ArticleBox.vue'
import RecommendBox from '../../components/Main/RecommendBox/RecommendBox.vue'

const picture = {
    src: '/big-pic.jpg',
    title: 'this is a title',
    description: 'this is a long long description'
}
const article_1 = {
    title: '这是一个标题',
    description: '这是一个表示'.repeat(100),
    pictures: [{ src: '/big-pic.jpg', }],
    category: '心情随笔',
    date: new Date()
}
const article_2 = {
    title: '这是一个标题',
    description: '这是一个表示'.repeat(100),
    pictures: [{ src: '/big-pic.jpg', }, { src: '/big-pic.jpg', }],
    category: '心情随笔',
    date: new Date()
}
const article_3 = {
    title: '这是一个标题',
    description: '这是一个表示'.repeat(100),
    pictures: [{ src: '/big-pic.jpg' }, { src: '/big-pic.jpg', }, { src: '/big-pic.jpg', }],
    category: '心情随笔',
    date: new Date()
}

const pictures = [{
    src: '/big-pic.jpg',
    link: '#',
    title: 'this is a title',
},
{
    src: '/big-pic.jpg',
    link: '#',
    title: 'this is a title',
},
{
    src: '/big-pic.jpg',
    link: '#',
    title: 'this is a title',
},
{
    src: '/big-pic.jpg',
    link: '#',
    title: 'this is a title',
}]

const images = ['/big-pic.jpg', '/big-pic.jpg', '/big-pic.jpg', '/big-pic.jpg']
</script>

<style scoped lang='less'>
.home {
    margin: 0 auto;
}

.mid-divider {
    :deep(.arco-divider-text) {
        font-size: 18px;
        font-weight: 700;
        color: #333;
    }
}
</style>