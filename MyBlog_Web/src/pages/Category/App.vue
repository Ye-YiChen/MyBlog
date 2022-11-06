<template>
    <div class="category">
        <Home>
            <ContentBox title="分类列表">
                <ArticleBox :article=article />
                <ArticleBox :article=article />
                <ArticleBox :article=article />
                <ArticleBox :article=article :divider="false" />
                <a-pagination :total="10000"  size="large" class="pagination"/>
            </ContentBox>
        </Home>

    </div>
</template> 

<script setup lang='ts'>
import ContentBox from "@/components/Main/ContentBox/ContentBox.vue";
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
.pagination{
    margin: 50px auto 0;
    justify-content: center;
}
</style>