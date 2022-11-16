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
import { getArticleCountInUser, getViewsCountByUserId, getLikesCountByUserId } from '@/api/User';
const { user } = useUserStore();
const { data: ArticleData } = await getArticleCountInUser(user.user_id!);
const { data: views_data } = await getViewsCountByUserId(user.user_id!);
const { data: like_data } = await getLikesCountByUserId(user.user_id!);
const infoCounts = reactive({
  views: views_data.count,
  likes: like_data.count,
  articles: ArticleData.count,
});
provide('infoCounts', infoCounts);

</script>

<style scoped lang='less'>

</style>