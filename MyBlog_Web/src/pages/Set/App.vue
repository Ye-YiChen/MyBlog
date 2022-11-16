<template>
  <Setting :infoCounts="infoCounts">
    <Suspense>
      <RouterView>
      </RouterView>
    </Suspense>
  </Setting>
</template>

<script setup lang='ts'>
import Setting from '@/layouts/Setting.vue';
import { reactive, provide } from 'vue';
import { useUserStore } from '@/stores/user';
import { getArticleCountInUser, getLikesAndViewsInUser } from '@/api/User';
const { user } = useUserStore();
const { data:ArticleData } = await getArticleCountInUser(user.user_id!);
const { data:likes_views_data } = await getLikesAndViewsInUser(user.user_id!);
const infoCounts = reactive({
  views: likes_views_data.views,
  likes: likes_views_data.likes,
  articles: ArticleData.count,
});
provide('infoCounts', infoCounts);

</script>

<style scoped lang='less'>

</style>