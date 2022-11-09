<template>
  <ContentBox title="新增文章" class="blog-box">
    <a-space :style="{ width: '100%' }" direction="vertical" size="large">
      <a-input placeholder="Please enter something" allow-clear size="large">
        <template #prepend>
          文章标题
        </template>
      </a-input>
      <a-select placeholder="Please select ..." allow-search loading size="large">
        <a-option>Beijing</a-option>
        <a-option>Shanghai</a-option>
        <a-option>Guangzhou</a-option>
        <a-option disabled>Disabled</a-option>
        <a-option>Shenzhen</a-option>
        <a-option>Chengdu</a-option>
        <a-option>Wuhan</a-option>
        <template #prefix>
          <span>文章分类 </span>
        </template>
      </a-select>
      <a-input-tag :default-value="['test']" placeholder="Please Enter" allow-clear size="large">
        <template #prefix>文章标签</template>
      </a-input-tag>
      <MdEditor v-model="article" ></MdEditor>

      <a-space size="large"> 
        <!-- <a-button type="primary" size="large" @click="isPreview=!isPreview">预览</a-button> -->
        <a-button type="outline" size="large" long>发布文章</a-button>
      </a-space>
    </a-space>
  </ContentBox>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import ContentBox from '@/components/Main/ContentBox/ContentBox.vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
const article = ref("# test")
const isPreview = ref(false)
</script>

<style scoped lang='less'>
.blog-box {
  box-sizing: border-box;
  margin: 0;
  margin-left: 1vw;
  height: auto;
  height: 100%;
}
</style>