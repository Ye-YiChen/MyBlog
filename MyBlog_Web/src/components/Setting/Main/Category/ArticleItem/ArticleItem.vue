<template>
    <a-card hoverable :style="{ width: '100%' }">
        <template #title>
            <a-space size="large" class="normal-text">
                <span>
                    <icon-calendar />
                    {{ article.date.toLocaleDateString() }}
                </span>
                <span>
                    <icon-eye />
                    {{ article.view }}
                </span>
                <span>
                    <icon-heart />
                    {{ article.like }}
                </span>
            </a-space>
        </template>

        <a-card-meta title="Card Title">
            <template #description>
                <a-typography-paragraph :ellipsis="{
                    suffix: `--${article.category}`,
                    rows: 3,
                    // expandable: true,
                }">
                    A design is a plan or specification for the construction of an object or system or for the
                    implementation of
                    an activity or process, or the result of that plan or specification in the form of a prototype,
                    product or
                    process. The verb to design expresses the process of developing a design. The verb to design
                    expresses the
                    process of developing a design.
                    A design is a plan or specification for the construction of an object or system or for the
                    implementation of
                    an activity or process, or the result of that plan or specification in the form of a prototype,
                    product or
                    process. The verb to design expresses the process of developing a design. The verb to design
                    expresses the
                    process of developing a design.
                </a-typography-paragraph>
            </template>
            <template #title>
                <a-space >
                    <h3 class="no-margin huge-text" style="marginBottom:2vh">{{ article.title }}</h3>
                    <span class="no-margin normal-text sub-title" style="marginBottom:2vh">--{{ article.category }}</span>
                </a-space>
            </template>
        </a-card-meta>
        <template #extra>
            <a-space>
                <a-tag bordered :color="index % 2 === 0 ? 'blue' : 'red'" v-for="(value, index) in article.tags">{{
                        value
                }}
                </a-tag>
            </a-space>
        </template>
        <template #actions>
            <a-space>
                <a-button type="outline" size="small">编辑</a-button>
                <a-button type="primary" size="small" status="danger">删除</a-button>
            </a-space>
        </template>
    </a-card>
</template>

<script setup lang='ts'>
interface ArticleItemProps {
    article: {
        id: number;
        title: string;
        date: Date;
        view: number;
        like: number;
        content: string;
        tags: string[];
        category: string;
    }
}
const { article } = defineProps<ArticleItemProps>()
</script>

<style scoped lang='less'>
.sub-title{
    margin-left: .5vw;
    margin-top: 4px;
}
</style>