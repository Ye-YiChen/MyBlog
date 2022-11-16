<template>
  <div>
    <Home>
      <ContentBox>
        <ArticleDetail :info="info" @like="onClickLike" :isLike="isLike" />
      </ContentBox>
      <ContentBox title="相关阅读">
        <a-carousel :autoPlay="true" animation-name="card" show-arrow="never" indicator-position="outer" :style="{
          width: '100%',
          height: '25vh',
        }">
          <a-carousel-item v-for="image in images" :style="{ width: '60%', }" class="img-mask">
            <img :src="image" :style="{
              height: '100%'
            }" class="img-mask" />
            <h4 class="img-text text-center">{{ image }}</h4>
          </a-carousel-item>
        </a-carousel>
      </ContentBox>
      <ContentBox title="评论">
        <a-comment align="right"
          avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp">

          <template #actions>
            <a-button key="0" type="secondary"> Cancel </a-button>
            <a-button key="1" type="primary"> Comment </a-button>
          </template>
          <template #content>
            <a-input placeholder="Here is you content." />
          </template>
        </a-comment>
        <a-divider />
        <a-comment align="right" author="Balzac"
          avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
          content="A design is a plan or specification for the construction of an object
          or system or for the implementation of an activity or process, or the
          result of that plan or specification in the form of a prototype,
          product or process." datetime="1 hour">
          <template #actions>
            <a-button class="action-btn" type="text">
              <IconMessage :style="{ marginRight: '5px' }" />
              <span>Reply</span>
            </a-button>
          </template>


        </a-comment>
        <a-comment align="right" author="Balzac"
          avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
          content="A design is a plan or specification for the construction of an object
          or system or for the implementation of an activity or process, or the
          result of that plan or specification in the form of a prototype,
          product or process." datetime="1 hour">
          <template #actions>
            <a-button class="action-btn" type="text">
              <IconMessage :style="{ marginRight: '5px' }" />
              <span>Reply</span>
            </a-button>
          </template>


        </a-comment>
        <a-comment align="right" author="Balzac"
          avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
          content="A design is a plan or specification for the construction of an object
          or system or for the implementation of an activity or process, or the
          result of that plan or specification in the form of a prototype,
          product or process." datetime="1 hour">
          <template #actions>
            <a-button class="action-btn" type="text">
              <IconMessage :style="{ marginRight: '5px' }" />
              <span>Reply</span>
            </a-button>
          </template>
        </a-comment>

        <a-pagination :total="10000" size="large" class="pagination" />
      </ContentBox>
    </Home>

  </div>
</template>

<script setup lang='ts'>
import ArticleDetail from '@/components/Article/ArticleDetail/AtricleDetail.vue'
import ContentBox from '@/components/Main/ContentBox/ContentBox.vue';
import Home from '@/layouts/Home.vue';
import { getArticleByArticleIdWithCategory, postLikesByArticleId, getLikesByArticleId, deleteLikesByArticleId, postViewsByArticleId, getLikesCountByArticleId } from '@/api/Article';
import { useRoute } from 'vue-router';
import { useUserStore } from '@/stores/user';
const { user } = useUserStore();
const { params } = useRoute();
// 获取文章详情
const { data: info } = await getArticleByArticleIdWithCategory(parseInt(params.article_id as string));
const {data:likeCount} = await getLikesCountByArticleId(parseInt(params.article_id as string));
// 注入修改点赞数量（不太好）
info.likes = likeCount[0].count;
// 获取文章用户是否点赞
const { data } = await getLikesByArticleId(user.user_id!, parseInt(params.article_id as string));
// 保存是否点赞
const isLike = !!data;
async function onClickLike() {
  if (isLike) {
    const a = await deleteLikesByArticleId(user.user_id!, parseInt(params.article_id as string),);
    console.log(a)
  } else {
    const b = await postLikesByArticleId(user.user_id!, parseInt(params.article_id as string),);
    console.log(b)
  }
}


// 在页面停留5s后，增加文章浏览量
setTimeout(() => {
  postViewsByArticleId(parseInt(params.article_id as string));
}, 5000);

const images = [
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
];
</script>

<style scoped lang='less'>
.img-mask {
  position: absolute;
  bottom: 0;
  margin: 0;
  object-fit: cover;

  .img-text {
    position: absolute;
    bottom: 0;
    color: #eee;
    margin: 0;
    padding: 5px 10px;
    background: linear-gradient(rgba(0, 0, 0, 0.05), rgba(41, 41, 41, 0.8));

  }
}

.action-btn {
  color: #4e5969;
}

.pagination {
  margin: 50px auto 0;
  justify-content: center;
}
</style>