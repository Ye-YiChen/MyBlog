<template>
    <ContentBox title="添加分类" class="blog-box">
        <a-form :model="form" layout="vertical" style="height:100%">
            <a-form-item field="title" label="分类标题">
                <a-input placeholder="Please enter something" allow-clear size="large" />
            </a-form-item>
            <a-form-item field="content" label="分类描述">
                <a-textarea
                    default-value="This is the contents of the textarea. This is the contents of the textarea. This is the contents of the textarea."
                    :auto-size="{
                        minRows: 2,
                    }" />


            </a-form-item>
            <a-form-item field="tag" label="分类标签">
                <a-input-tag :default-value="['test']" placeholder="Please Enter" allow-clear size="large" />
            </a-form-item>
            <a-space size="large" class="submit-btn">
                <a-button type="outline" size="large" long>发布文章</a-button>
            </a-space>
        </a-form>

    </ContentBox>
</template>

<script setup lang='ts'>
import ContentBox from '@/components/Main/ContentBox/ContentBox.vue';
import { reactive } from 'vue';
const form = reactive({
    name: '',
    post: '',
    isRead: false,
});
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
}
</style>