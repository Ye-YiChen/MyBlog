<template>
  <Setting :infoCounts="infoCounts">
    <Suspense>
        <RouterView >
        </RouterView>
    </Suspense>
  </Setting>
</template>

<script setup lang='ts'>
import Setting from '@/layouts/Setting.vue';
import { reactive ,provide } from 'vue';
import { useUserStore } from '@/stores/user';
import { getArticleCountInUser } from '@/api/User';
const { user } = useUserStore();
const {data} = await getArticleCountInUser(user.user_id!);

const infoCounts = reactive({
   views: 114514,
   likes: 415411,
   articles: data.count,
});
provide('infoCounts', infoCounts);

</script>

<style scoped lang='less'>

</style>