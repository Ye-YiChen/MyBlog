<template>
    <div class="category">
        <Home>
            <h3 class="category-title huge-text">分类标题</h3>
            <a-divider/>
            <ArticleBox :article=article  />
            <ArticleBox :article=article  />
            <ArticleBox :article=article  />
            <ArticleBox :article=article :divider="false" />
        </Home>

    </div>
</template> 

<script setup lang='ts'>
import ArticleBox from "../../components/Main/ArticleBox/ArticleBox.vue";
import Home from "../../layouts/Home.vue";

const article = {
    title: '这是一个标题',
    description: '这是一个表示'.repeat(100),
    pictures: [{ src: '/big-pic.jpg', }],
    category: '心情随笔',
    date: new Date()
}


</script>

<style scoped lang='less'>

.category-title{
    position: absolute;
    top: 0;
}
</style>