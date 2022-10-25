<template>
  <a-space class="avatar" direction="vertical">
    <!-- 头像 -->
    <a-avatar trigger-type="mask" :size="100">
      <img alt="avatar"
        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />

      <template #trigger-icon>
        <IconEdit size="32" />
      </template>
    </a-avatar>
    <a-typography-title class="text-center" :heading="6">
      YeYiChen
    </a-typography-title>
    <a-typography-text type="secondary" class="small-text">
      YeYiChen's blog
    </a-typography-text>
    <ul class="icon-box">
      <li>
        <a-tooltip content="QQ" position="bottom">
          <a-button type="text" >
            <template #icon>
              <icon-qq size="16" />
            </template>
          </a-button>

        </a-tooltip>

      </li>
      <li>
        <a-tooltip content="WeChat" position="bottom">
          <a-button type="text">
            <template #icon>
              <icon-wechat size="16" />
            </template>
          </a-button>

        </a-tooltip>

      </li>
      <li>
        <a-tooltip content="GitHub" position="bottom">
          <a-button type="text">
            <template #icon>
              <icon-github size="16" />
            </template>
          </a-button>

        </a-tooltip>

      </li>

    </ul>
  </a-space>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='less'>
.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0;
}

.icon-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;

  li {
    margin: 0 5px;
  }

  :deep(.arco-btn-text) {
    color: #666 ;
  }
}
</style>
