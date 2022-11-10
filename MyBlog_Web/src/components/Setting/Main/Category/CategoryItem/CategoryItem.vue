<template>
    <a-card hoverable :style="{ width: '100%' }">
        <template #title>
            <a-space size="large" class="normal-text">
                <span>
                    <icon-calendar />
                    {{ category.date.toLocaleDateString() }}
                </span>
                <span>
                    <icon-eye />
                    {{ category.view }}
                </span>
                <span>
                    <icon-heart />
                    {{ category.like }}
                </span>
            </a-space>
        </template>

        <a-card-meta title="Card Title">
            <template #description>
                <a-typography-paragraph :ellipsis="{
                    suffix: `--${category.title}`,
                    rows: 2,
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
                <a-space>
                    <h3 class="no-margin huge-text" style="marginBottom:2vh">{{ category.title }}</h3>
                </a-space>
            </template>
            <template #avatar>

                <a-typography-text  mark >
                    文章总数：
                    <a-typography-text bold >
                        114514
                    </a-typography-text>

                </a-typography-text>

            </template>
        </a-card-meta>
        <template #extra>

            <a-space>
                <a-tag bordered :color="index % 2 === 0 ? 'blue' : 'red'" v-for="(value, index) in category.tags">{{
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
interface CategoryItemProps {
    category: {
        id: number;
        title: string;
        date: Date;
        view: number;
        like: number;
        content: string;
        tags: string[];
    }
}
const { category } = defineProps<CategoryItemProps>()
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