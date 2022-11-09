<template>
  <ContentBox title="新增文章" class="blog-box">
    <a-space :style="{ width: '100%' }" direction="vertical" size="large">
      <a-input placeholder="Please enter something" allow-clear size="large">
        <template #prepend>
          文章标题
        </template>
      </a-input>
      <a-select :style="{ width: '320px' }" placeholder="Please select ..." allow-search loading>
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
      <v-md-editor v-model="article"></v-md-editor>

    </a-space>
  </ContentBox>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import ContentBox from '@/components/Main/ContentBox/ContentBox.vue';

const article = ref("")

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