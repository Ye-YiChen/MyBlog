<template>
  <ContentBox title="文章列表" class="blog-box">
    <a-space direction="vertical" size="large" :style="{ width: '100%' }">
      <ArticleItem v-for="item in ArticleListShow" :key="item.article_id" :article="item" @delete="onDelete"
        @edit="onEdit" />
      <a-pagination :total="50" class="bottom-pagination" />
    </a-space>
  </ContentBox>
</template>

<script setup lang='ts'>
import ContentBox from '@/components/Main/ContentBox/ContentBox.vue';
import ArticleItem from '@/components/Setting/Main/Articles/ArticleItem/ArticleItem.vue';
import { deleteArticleByArticleId, getArticlesByUserIdWithCategory } from '@/api/Article';
import { useUserStore } from '@/stores/user';
import { reactive } from 'vue';
import { Modal, Notification } from '@arco-design/web-vue';
const { user } = useUserStore();

const { data: ArticleList } = await getArticlesByUserIdWithCategory(user.user_id!, 1, 3);
console.log(ArticleList)
// 在分别查询文章总数


// 处理获取到的文章列表形成可用的数据
const ArticleListShow = reactive(
  ArticleList.map((article: any) => {
    return {
      ...article,
      tags: JSON.parse(article.tags),
      category_name: article.article_category.name,
      created_at: (new Date(article.created_at)).toLocaleString(),
    }
  })
)

async function onDelete(article_id: number) {
  Modal.confirm({
    title: '删除文章',
    content: '确定删除该文章吗？',
    onOk: async () => {
      await deleteArticleByArticleId(article_id);
      Notification.success({
        title: '删除成功',
        content: '文章删除成功',
      })
    }
  })

}
function onEdit(article_id: number) {
  console.log(article_id);
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

.bottom-pagination {
  justify-content: center;
  margin-top: 5vh;
}
</style>