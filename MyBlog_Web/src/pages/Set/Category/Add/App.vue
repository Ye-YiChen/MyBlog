<template>
    <ContentBox title="添加分类" class="blog-box">
        <a-form :model="form" layout="vertical" style="height:100%">
            <a-form-item field="title" label="分类标题">
                <a-input placeholder="Please enter something" allow-clear size="large" v-model="form.name" />
            </a-form-item>
            <a-form-item field="content" label="分类描述">
                <a-textarea
                    placeholder="This is the contents of the textarea. This is the contents of the textarea. This is the contents of the textarea."
                    v-model="form.description" :auto-size="{
                        minRows: 2,
                    }" />

            </a-form-item>
            <a-form-item field="tag" label="分类标签">
                <a-input-tag placeholder="Please enter tags" allow-clear size="large" v-model:model-value="form.tags" />
            </a-form-item>
            <a-space size="large" class="submit-btn">
                <a-button type="outline" size="large" long @click="onSubmit">发布文章</a-button>
            </a-space>
        </a-form>

    </ContentBox>
</template>

<script setup lang='ts'>
import { postArticleCategory } from '@/api/ArticleCategory';
import ContentBox from '@/components/Main/ContentBox/ContentBox.vue';
import { goRoute } from '@/utils/goRoute';
import { Notification } from '@arco-design/web-vue';
import { reactive, computed } from 'vue';
const form = reactive({
    name: '',
    description: '',
    tags: [],
});

const formData = computed(() => {
    return {
        ...form,
        tags: JSON.stringify(form.tags),
    };
});

async function onSubmit() {
    console.log(formData.value);
    await postArticleCategory(formData.value);
    Notification.success({
        title: '添加成功',
        content: '分类添加成功!',
    });
    goRoute('SetCategoryList');
}

</script>

<style scoped lang='less'>
.blog-box {
    box-sizing: border-box;
    margin: 0;
    margin-left: 1vw;
    // height: auto;
    height: 100%;
}

.description-box {
    .description-title {
        margin: 0;
    }
}

.submit-btn {
    flex: 1;
    justify-content: end;
    align-self: end;
}
</style>