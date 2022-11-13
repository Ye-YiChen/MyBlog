<template>
  <ContentBox title="新增文章" class="blog-box">
    <a-space :style="{ width: '100%' }" direction="vertical" size="large">
      <a-input placeholder="Please enter something" allow-clear size="large" v-model="article.title">
        <template #prepend>
          文章标题
        </template>
      </a-input>
      <a-select placeholder="Please select ..." allow-search :loading="categoryListLoading" size="large"
        v-model="article.category_name">
        <a-option v-for="(item) in categoryList" :key="item.article_category_id">{{ item.name }}</a-option>
        <template #prefix>
          <span>文章分类 </span>
        </template>
      </a-select>
      <a-input-tag v-model:model-value="article.tags" placeholder="Please Enter" allow-clear size="large">
        <template #prefix>文章标签</template>
      </a-input-tag>
      <MdEditor v-model="article.content" @on-upload-img="upLoadMDImg"></MdEditor>

      <a-space size="large" class="submit-btn">
        <!-- <a-button type="primary" size="large" @click="isPreview=!isPreview">预览</a-button> -->
        <a-button type="outline" size="large" long @click="onSubmit" :disabled="!isFilled">发布文章</a-button>
      </a-space>
    </a-space>
  </ContentBox>
</template>

<script setup lang='ts'>
import { reactive, computed } from 'vue';
import ContentBox from '@/components/Main/ContentBox/ContentBox.vue';
import MdEditor from 'md-editor-v3';
import { getArticleCategoriesByUserId } from '@/api/ArticleCategory';
import { useUserStore } from '@/stores/user';
import 'md-editor-v3/lib/style.css';
import type { ArticleCategory } from '@/type/ArticleCategory';
import { uploadImg } from '@/api/img';
import { postArticle } from '@/api/Article';
import { Notification } from '@arco-design/web-vue';
const { user } = useUserStore();
const article = reactive({
  title: '',
  content: '',
  category_name: "",
  tags: [],
});
const categoryList: ArticleCategory[] = (await getArticleCategoriesByUserId(user.user_id!, 1, 3)).data;
const categoryListLoading = computed(() => !categoryList);

const isFilled = computed(() => {
  return article.title !== '' && article.content !== '' && article.category_name !== '';
});

/**
 * 
 * @param files 图片文件列表（一般为单个文件）
 * @param callback 回收图片url回调函数
 */
async function upLoadMDImg(files: File[], callback: Function) {
  const res = await Promise.all(
    files.map((file: File) => {
      return uploadImg(file);
    }));
  callback(res.map((item) => item));
}

async function onSubmit() {
  if(!isFilled.value){
    Notification.error({
      title: '发布失败',
      content: '请填写完整信息',
    });
    return;
  }
  const { article_category_id } = categoryList.find((item) => item.name === article.category_name)!;
  const formData = { ...article, tags: JSON.stringify(article.tags), user_id: user.user_id, article_category_id };
  await postArticle(formData);
  Notification.success({
    title: '发布成功',
    content: '文章已发布!',
  });
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

.submit-btn {
  flex: 1;
}
</style>