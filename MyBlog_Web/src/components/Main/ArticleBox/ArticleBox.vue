<template>
  <div>
    <div class="1-pic" v-if="article.pictures.length===1">
      <div class="main-box">
        <a-typography class="text-box-1">
          <a-typography-title :heading="4" class="title-1" ellipsis>
            {{article.title}}
          </a-typography-title>
          <a-typography-paragraph :ellipsis="{
            rows: 4,
            suffix: '--Arco Design',
            expandable: false,
          }">
            {{article.description}}
          </a-typography-paragraph>
          <footer class="bottom-text small-text">{{article.category}} {{article.date.toLocaleDateString()}}</footer>
        </a-typography>
        <div class="img-box">
          <a-image-preview-group infinite>
            <a-space fill :style="{
              justifyContent: 'space-between'
            }">
              <!-- <img v-for="(picture,index) in article.pictures" :key="index" :src="picture.src" class="img-item" /> -->
              <a-image v-for="(picture,index) in  article.pictures" :key="index" :src="picture.src" height="140" class="round-box" />
            </a-space>
          </a-image-preview-group>

        </div>

      </div>

    </div>
    <div class="3-pic" v-else>
      <a-typography class="text-box">
        <a-typography-title :heading="4">
          {{article.title}}
        </a-typography-title>
        <a-typography-paragraph :ellipsis="{
          rows: 2,
          suffix: '--Arco Design',
          expandable: false,
        }">
          {{article.description}}
        </a-typography-paragraph>
      </a-typography>
      <div class="img-box">
        <a-image-preview-group infinite>
          <a-space fill :style="{
            justifyContent: 'space-around'
          }">
            <!-- <img v-for="(picture,index) in article.pictures" :key="index" :src="picture.src" class="img-item" /> -->
            <img v-for="(picture,index) in  article.pictures" :key="index" :src="picture.src" class="img-item round-box" />
          </a-space>
        </a-image-preview-group>

      </div>
      <footer class="bottom-text small-text">{{article.category}} {{article.date.toLocaleDateString()}}</footer>
    </div>
    <a-divider v-if="!!divider" />

  </div>
</template>

<script setup lang='ts'>
/* ???????????????????????????????????????????????????????????????4??? 
/* ???????????????????????????????????????????????????????????????
*/
interface ArticleShortCuts {
  title: string, // ??????
  description: string,
  pictures: { src: string, }[]
  category: string,
  date: Date
}
const { article, divider = true } = defineProps<{ article: ArticleShortCuts, divider?: boolean }>()
</script>

<style scoped lang='less'>
.bottom-text {
  color: #888;
  letter-spacing: 2px;
  margin: 20px 0 0;

}

.main-box {
  display: flex;

  .text-box-1 {
    margin: 0 20px 0 0;
  }

  .title-1 {
    margin: 0 20px 10px 0;
  }
}

.img-item {
  width: 100%;
  object-fit: contain;
  margin-bottom: 20px;
}
</style>