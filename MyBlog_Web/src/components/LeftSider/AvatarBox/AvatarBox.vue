<template>
  <a-space class="avatar" direction="vertical">
    <!-- 头像 -->
    <a-avatar trigger-type="mask" :size="100" @click="handleAvatarClick">
      <img alt="avatar" :src="user.avatar" />
      <template #trigger-icon v-if="user.token">
        <IconEdit size="32" />
      </template>
    </a-avatar>
    <a-typography-title class="text-center" :heading="6">
      {{user.username}}
    </a-typography-title>
    <a-typography-text type="secondary" class="small-text">
      {{user.description}}
    </a-typography-text>
    <ul class="icon-box">
      <li>
        <a-tooltip content="QQ" position="bottom">
          <a-link type="text" :href="link.QQ" class="href-link" target="_blank">
            <template #icon>
              <icon-qq size="16" />
            </template>
          </a-link>

        </a-tooltip>

      </li>
      <li>
        <a-tooltip position="bottom">
          <a-link type="text" :href="link.WeChat" class="href-link" target="_blank">
            <template #icon>
              <icon-wechat size="16" />
            </template>
          </a-link>
          <template #content>
            <div class="img-box" :style="{
              width: '100px',
              height: '100px',
            }">
              <img :src="user.wechat" :style="{
                width: '100%',
                height: '100%',
              }" />
            </div>
          </template>

        </a-tooltip>

      </li>
      <li>
        <a-tooltip content="GitHub" position="bottom">
          <a-link type="text" :href="link.GitHub" class="href-link" target="_blank">
            <template #icon>
              <icon-github size="16" />
            </template>
          </a-link>

        </a-tooltip>

      </li>

    </ul>
  </a-space>
</template>

<script setup lang='ts'>
import type { User } from '@/type/User';
import {defineEmits} from 'vue';

const emits = defineEmits(['avatarClick']);
interface Props {
  user: User;
  QQlink: string
}
const { user, QQlink } = defineProps<Props>();
// console.log(QQlink);
const link = {
  QQ: QQlink ?? '',
  WeChat: user.wechat ?? '',
  GitHub: user.github ?? "https://github.com/Ye-YiChen/MyBlog"
}

function handleAvatarClick(){
  emits('avatarClick');
}
</script>

<style scoped lang='less'>
.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0 0;
}

.icon-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  margin: 2vh 0 0;

  li {
    margin: 0 5px;
  }

  .href-link {
    color: #666;
  }

  :deep(.arco-btn-text) {
    color: #666;
  }
}
</style>
