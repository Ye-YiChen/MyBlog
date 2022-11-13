<template>
    <a-card hoverable :style="{ width: '100%' }" >
        <template #title>
            <a-space size="large" class="normal-text">
                <span>
                    <icon-calendar />
                    {{ new Date(categoryShow.created_at).toLocaleString() }}
                </span>
                <span>
                    <icon-eye />
                    {{ categoryShow.views }}
                </span>
                <span>
                    <icon-heart />
                    {{ categoryShow.likes }}
                </span>
            </a-space>
        </template>

        <a-card-meta title="Card Title" >
            <template #description>
                <a-typography-paragraph :ellipsis="{
                    suffix: `--${categoryShow.username}`,
                    rows: 2,
                    // expandable: true,
                }">
                    {{ categoryShow.description }}
                </a-typography-paragraph>
            </template>
            <template #title>
                <a-space>
                    <h3 class="no-margin huge-text" style="marginBottom:2vh">{{ categoryShow.name }}</h3>
                </a-space>
            </template>
            <template #avatar>

                <a-typography-text mark>
                    文章总数：
                    <a-typography-text bold>
                        {{categoryShow.count}}
                    </a-typography-text>

                </a-typography-text>

            </template>
        </a-card-meta>
        <template #extra>

            <a-space>
                <a-tag bordered :color="index % 2 === 0 ? 'blue' : 'red'" v-for="(value, index) in categoryShow.tags">{{
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
import { computed, defineEmits} from 'vue';
interface CategoryItemProps {
    category: {
        article_category_id: number;
        username: string;
        name: string;
        created_at: string;
        views: number;
        likes: number;
        description: string;
        tags: string;
        count: number;
    }
}
const { category } = defineProps<CategoryItemProps>()
const categoryShow = computed(() => {
    return {
        ...category,
        tags: JSON.parse(category.tags) as string[],
    }
})
const emit = defineEmits(['edit', 'delete'])
function handleEdit() {
    emit('edit', categoryShow.value.article_category_id)
}
function handleDelete() {
    emit('delete', categoryShow.value.article_category_id)
}
</script>

<style scoped lang='less'>
.sub-title {
    margin-left: .5vw;
    margin-top: 4px;
}



.total-num {
    width: 100px;
}
</style>