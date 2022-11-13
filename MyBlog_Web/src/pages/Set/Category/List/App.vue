<template>
    <ContentBox class="blog-box">
        <a-space size="large" direction="vertical" :style="{ width: '100%' }">
            <CategoryItem :category="item" v-for="(item, index) in categoryList" @delete="onDelete" @edit="onEdit" />
            <a-pagination :total="50" class="bottom-pagination" />
        </a-space>
    </ContentBox>
</template>

<script setup lang='ts'>
import { deleteArticleCategory, getArticleCategoriesByUserId, getArticleCountInArticleCategory } from '@/api/ArticleCategory';
import ContentBox from '@/components/Main/ContentBox/ContentBox.vue';
import CategoryItem from '@/components/Setting/Main/Category/CategoryItem/CategoryItem.vue';
import { useUserStore } from '@/stores/user';
import { Modal, Notification } from '@arco-design/web-vue';
import { reactive, } from 'vue';
const { user } = useUserStore();
const res = await getArticleCategoriesByUserId(user.user_id!, 1, 3);
const categoryList = reactive(res.data);
const categoryCountList = await Promise.all(categoryList.map((item: any) => getArticleCountInArticleCategory(item.article_category_id)))

// 合并数据
categoryList.forEach((item: any, index: number) => {
    item.count = categoryCountList[index].data.count;
    item.username = user.username;
})


function onDelete(category_id: number) {
    Modal.confirm({
        title: '删除分类',
        content: '确定删除该分类吗？',
        width: 300,
        // 对话框是否居中显示
        alignCenter: true,
        titleAlign: 'center',
        onOk: async () => {
            await deleteArticleCategory(category_id);
            categoryList.splice(
                categoryList.findIndex((item: { article_category_id: number; }) => item.article_category_id === category_id),
                1
            );
            Notification.success({
                title: '删除成功',
                content: '分类删除成功!',
            });
        },
        closable: true,
    });
}
function onEdit() {
    console.log('edit');
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
