<template>
    <a-card hoverable :style="{ width: '100%' }">
        <template #title>
            <a-space size="large" class="normal-text">
                <span>
                    <icon-calendar />
                    {{ article.created_at }}
                </span>
                <span>
                    <icon-eye />
                    {{ article.views }}
                </span>
                <span>
                    <icon-heart />
                    {{ article.likes }}
                </span>
            </a-space>
        </template>

        <a-card-meta title="Card Title">
            <template #description>
                <a-typography-paragraph :ellipsis="{
                    
                    rows: 3,
                    // expandable: true,
                }">
                   {{ article.content }}
                </a-typography-paragraph>
            </template>
            <template #title>
                <a-space >
                    <h3 class="no-margin huge-text" style="marginBottom:2vh">{{ article.title }}</h3>
                    <span class="no-margin normal-text sub-title" style="marginBottom:2vh">--{{ article.category_name }}</span>
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
                <a-button type="outline" size="small" @click="handleEdit">编辑</a-button>
                <a-button type="primary" size="small" status="danger" @click="handleDelete">删除</a-button>
            </a-space>
        </template>
    </a-card>
</template>

<script setup lang='ts'>
import { defineEmits } from 'vue';
const emits = defineEmits(['edit','delete']);
interface ArticleItemProps {
    article: {
        [key: string]: any
        article_id: number;
        title: string;
        views: number;
        likes: number;
        content: string;
        tags: string[];
        created_at: string;
        category_name: string;
        category_id: number;
    }
}
const { article } = defineProps<ArticleItemProps>()

function handleDelete(){
    emits('delete',article.article_id)
}

function handleEdit(){
    emits('edit',article.article_id)
}

</script>

<style scoped lang='less'>
.sub-title{
    margin-left: .5vw;
    margin-top: 4px;
}
</style>