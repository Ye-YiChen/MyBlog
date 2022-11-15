<template>
  <div>
    <a-typography-title class="title">
      {{ infoShow.title }}
    </a-typography-title>
    <a-space class="short-info">
      <template #split>
        <a-divider direction="vertical" />
      </template>
      <a-link class="link" @click="goUser">
        <icon-user class="" />
        <span class="short-text">{{ infoShow.user.username }}</span>
      </a-link>
      <!-- <a-divider direction="vertical" /> -->

      <a-link class="link" @click="goCategory">
        <icon-menu />
        <span class="short-text">{{ infoShow.article_category.name }}</span>
      </a-link>
      <!-- <a-divider direction="vertical" /> -->

      <span class="link">
        <icon-calendar />
        <span class="short-text">{{ new Date(infoShow.created_at).toLocaleString() }}</span>
      </span>
      <!-- <a-divider direction="vertical" /> -->

      <span class="link">
        <icon-eye />
        <span class="short-text">{{ infoShow.views }}</span>
      </span>
      <!-- <a-divider direction="vertical" /> -->

      <span class="link">
        <icon-heart-fill />
        <span class="short-text">{{ infoShow.likes }}</span>
      </span>
    </a-space>
    <a-divider />
    <div class="main">
      <MdEditor v-model="infoShow.content" previewOnly />
      <a-button type="dashed" status="warning" class="donate-btn" size="large">
        <template #icon>
          <icon-gift size="large" />
        </template>
        <span class="donate-text big-text" @click="handleDonation">请喝杯咖啡</span>
      </a-button>
      <a-modal simple title="请喝杯咖啡" v-model:visible="donationVisible" :width="400" body-class="donation-box"
        @ok="handleThank" ok-text="已经打赏" cancel-text="下次一定" draggable>
        <div class="donation-box">
          <a-typography-paragraph>
            如果您觉得我的文章对您有帮助，可以请我喝杯咖啡，谢谢！
          </a-typography-paragraph>
          <div class="donation-img" :style="{
            width: '100%',
            height: 'auto',
          }">
            <img :src="info.user.donation" :style="{
              width: '100%',
              height: '100%',
            }" />
          </div>

        </div>
      </a-modal>
    </div>
    <div class="bottom-info">
      <a-space>
        <a-link :hoverable="false" class="link">
          <icon-heart-fill size="large" />
          <span class="short-text big-text">{{ info.likes }}</span>
        </a-link>
      </a-space>
      <a-space size="medium">
        <span>分享： </span>
        <a-tooltip background-color="#3491FA">
          <icon-weibo size="large" class="red pointer" />
          <template #content>This is tooltip content</template>
        </a-tooltip>
        <a-tooltip background-color="#3491FA">
          <icon-wechat size="large" class="green pointer" />
          <template #content>This is tooltip content</template>
        </a-tooltip>
        <a-tooltip background-color="#3491FA">
          <icon-qq size="large" class="light-blue pointer" />
          <template #content>This is tooltip content</template>
        </a-tooltip>
      </a-space>
    </div>
    <a-divider />
    <a-space class="relative-box">
      <a-button type="text" class="btn-text pre">上一篇文章</a-button>
      <a-button type="text" class="btn-text next">下一篇文章</a-button>
    </a-space>

  </div>
</template>
  
<script setup lang='ts'>
import { ref } from 'vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { defineProps, reactive } from 'vue';
import { Notification } from '@arco-design/web-vue';
import { goRoute } from '@/utils/goRoute';
const { info } = defineProps<{ info: any }>();
const infoShow = reactive({
  ...info,
  created_at: new Date(info.created_at).toLocaleString(),
});

const donationVisible = ref(false);
const isDonate = ref(false);

function goCategory() {
  goRoute('Category', { category_id: infoShow.article_category.article_category_id });
}

function goUser() {
  goRoute('Home', { user_id: info.user.user_id });
}

function handleThank(title: string = '感谢您的支持', content: string = '您的支持是我最大的动力') {
  isDonate.value = true;
  Notification.success({
    title,
    content,
  });
}
function handleDonation() {
  if (!isDonate.value) {
    donationVisible.value = true;
  } else {
    handleThank('再次感谢您的支持');
  }
}
</script>
  
<style scoped lang='less'>
.title {
  margin-top: 0;
}



.short-info {
  // justify-content: space-between;
  width: 100%;

  .link {
    color: #888;
    margin-right: .5vw;
  }

  .short-text {
    margin-left: 5px;
  }
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  .donate-btn {
    margin-top: 10vh;
  }

  .donate-text {
    line-height: 10px;
  }

}


.bottom-info {
  display: flex;
  justify-content: space-between;
  color: #666;

  .link {
    color: #666;
  }

  .short-text {
    margin-left: 5px;
  }
}

.relative-box {
  display: flex;
  justify-content: space-between;

  .btn-text {

    margin-top: 20px;
    color: #888;
  }

  .pre::before {
    content: '上一篇';
    position: absolute;
    top: -30px;
    left: 15px;
    font-size: 12px;
    color: #aaa;
  }

  .next::after {
    content: '下一篇';
    position: absolute;
    top: -30px;
    right: 15px;
    font-size: 12px;
    color: #aaa;
  }
}
</style>