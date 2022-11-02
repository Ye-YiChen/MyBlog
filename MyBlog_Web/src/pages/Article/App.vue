<template>
  <div>
    <Home>
      <ArticleDetail/>
    </Home>

  </div>
</template>

<script setup lang='ts'>
import ArticleDetail from '@/components/Article/ArticleDetail/AtricleDetail.vue'
import Home from '@/layouts/Home.vue';
import { ref } from 'vue';

const article = ref(`# hello
染指流沙，回绕不尽的世界繁华；

青灯孤伴，镌刻不完的午夜落花；

锦帛残卷，撰写不到的城南旧事；

蓦然回首，消逝不见的绝美年华。

`)

</script>

<style scoped lang='less'>
</style>