<template>
    <div class="home">
        <Home>
            <Suspense>
                <ContentBox>
                    <CustomPicBox :picture="picture" />
                    <a-divider orientation="center" class="mid-divider" margin="50px">最新文章</a-divider>
                    <ArticleBox :article="item" v-for="item, index in articleListShow" :key="item.article_id"
                        :divider="index === articleListShow.length" />
                    <ArticleBox :article="article_1" />
                    <ArticleBox :article="article_2" />
                    <ArticleBox :article="article_3" :divider="false" />
                    <a-pagination :total="10000" size="large" class="pagination" />
                </ContentBox>
            </Suspense>

            <ContentBox>
                <a-divider orientation="center" class="mid-divider" margin="50px">旅行日记</a-divider>
                <a-carousel :auto-play="true" class="carousel-chart round-box" show-arrow="never" direction="vertical"
                    animationName="fade">
                    <a-carousel-item v-for="image in images">
                        <img :src="image" class="carousel-img" />
                    </a-carousel-item>
                </a-carousel>
                <a-divider orientation="center" class="mid-divider" margin="50px">推荐板块</a-divider>
                <RecommendBox :pictures="pictures" />
            </ContentBox>
        </Home>
    </div>

</template>

<script setup lang='ts'>
import Home from '@/layouts/Home.vue'
import CustomPicBox from '../../components/Main/CustomPicBox/CustomPicBox.vue'
import ArticleBox from '../../components/Main/ArticleBox/ArticleBox.vue'
import RecommendBox from '../../components/Main/RecommendBox/RecommendBox.vue'
import ContentBox from '@/components/Main/ContentBox/ContentBox.vue';
import { getArticlesByUserIdWithCategory } from '@/api/Article';
import { useRoute } from 'vue-router';
import { computed, reactive } from 'vue';
import type { Article } from '@/type/Article';
const route = useRoute();
const { user_id } = route.params;
const { data: articleList } = await getArticlesByUserIdWithCategory(parseInt(user_id as string), 1, 3);
console.log(articleList)
const articleListShow = computed(() => {
    return articleList.map((article: Article) => {
        return {
            ...article,
            tags: article.tags ? JSON.parse(article.tags) : new Array(),
            pictures: article.pictures ? JSON.parse(article.pictures) : new Array(),
            category_name: article.article_category.name,
            created_at: (new Date(article.created_at!)).toLocaleString(),
        }
    })
})
const picture = {
    src: '/big-pic.jpg',
    title: 'this is a title',
    description: 'this is a long long description'
}
const article_1 = {
    title: '这是一个标题',
    content: '这是一个表示'.repeat(100),
    pictures: [{ src: '/big-pic.jpg', }],
    category_name: '心情随笔',
    created_at: (new Date()).toLocaleString(),
}
const article_2 = {
    title: '这是一个标题',
    content: '这是一个表示'.repeat(100),
    pictures: [{ src: '/big-pic.jpg', }, { src: '/big-pic.jpg', }],
    category_name: '心情随笔',
    created_at: (new Date()).toLocaleString(),
}
const article_3 = {
    title: '这是一个标题',
    content: '这是一个表示'.repeat(100),
    pictures: [{ src: '/big-pic.jpg' }, { src: '/big-pic.jpg', }, { src: '/big-pic.jpg', }],
    category_name: '心情随笔',
    created_at: (new Date()).toLocaleString(),
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

.carousel-chart {
    margin: 0 20px;
    min-width: 80%;
    height: 300px;

    .carousel-img {
        width: 100%;
        height: 100%;
        object-fit: cover
    }
}

.mid-divider {
    :deep(.arco-divider-text) {
        font-size: 18px;
        font-weight: 700;
        color: #333;
    }
}

.pagination {
    margin: 50px auto 0;
    justify-content: center;
}
</style>