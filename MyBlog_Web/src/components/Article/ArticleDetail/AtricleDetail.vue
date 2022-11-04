<template>
  <div>
    <a-typography-title class="title">
      这是一个大标题
    </a-typography-title>
    <a-space class="short-info">
      <template #split>
        <a-divider direction="vertical" />
      </template>
      <a-link class="link">
        <icon-user class="" />
        <span class="short-text">YeYiChen</span>
      </a-link>
      <!-- <a-divider direction="vertical" /> -->

      <a-link class="link">
        <icon-menu />
        <span class="short-text">随心笔记</span>
      </a-link>
      <!-- <a-divider direction="vertical" /> -->

      <span class="link">
        <icon-calendar />
        <span class="short-text">2022-01-01</span>
      </span>
      <!-- <a-divider direction="vertical" /> -->

      <span class="link">
        <icon-eye />
        <span class="short-text">2022-01-01</span>
      </span>
      <!-- <a-divider direction="vertical" /> -->

      <span class="link">
        <icon-heart-fill />
        <span class="short-text">10000</span>
      </span>
    </a-space>
    <a-divider />
    <div class="main">
      <v-md-editor v-model="article" height="400px" mode="preview"></v-md-editor>
      <a-button type="dashed" status="warning" class="donate-btn" size="large">
        <template #icon>
          <icon-gift size="large" />
        </template>
        <span class="donate-text big-text">赞赏</span>
      </a-button>

    </div>
    <div class="bottom-info">
      <a-space>
        <a-link :hoverable="false" class="link">
          <icon-heart-fill size="large" />
          <span class="short-text big-text">10000</span>
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

const article = ref(`# hello
  染指流沙，回绕不尽的世界繁华；
  
  青灯孤伴，镌刻不完的午夜落花；
  
  锦帛残卷，撰写不到的城南旧事；
  
  蓦然回首，消逝不见的绝美年华。
  
  `)

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