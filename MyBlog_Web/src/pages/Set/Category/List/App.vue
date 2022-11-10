<template>
    <ContentBox class="blog-box">
        <a-space size="large" direction="vertical">
            <CategoryItem :category="category" />
            <CategoryItem :category="category" />
            <CategoryItem :category="category" />
            <CategoryItem :category="category" />
            <CategoryItem :category="category" />
            <a-pagination :total="50" class="bottom-pagination" />

        </a-space>
    </ContentBox>
</template>

<script setup lang='ts'>
import ContentBox from '@/components/Main/ContentBox/ContentBox.vue';
import CategoryItem from '@/components/Setting/Main/Category/CategoryItem/CategoryItem.vue';
const category = {
    id: 1,
    title: '分类标题',
    date: new Date(),
    view: 114514,
    like: 114514,
    content: `A design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process. The verb to design expresses the process of developing a design. The verb to design expresses the process of developing a design. A design is a plan or specification for the construction of an object o...--Arco Design string`,
    tags: ['git', '版本控制', '技巧'],
}

</script>

<style scoped lang='less'>
.blog-box {
    box-sizing: border-box;
    margin: 0;
    margin-left: 1vw;
    height: auto;
    height: 100%;
}
.bottom-pagination{
  justify-content: center;
  margin-top: 5vh;
}
</style>
