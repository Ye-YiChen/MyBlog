<template>
    <a-layout class="layout-setting">
        <a-layout-header>
            <Header :user="user" :QQlink="QQlink" @editClick="goSelfEdit" />
        </a-layout-header>
        <a-layout class="bottom-container">
            <a-layout-sider class="left-sider" collapsible :step="10">
                <a-menu :default-open-keys="['Biography']" :default-selected-keys="['Biography_List']" breakpoint="xl"
                    v-model:selected-keys="openKeys" auto-scroll-into-view @menu-item-click="onClick">
                    <a-sub-menu key="Biography">
                        <template #icon>
                            <icon-user></icon-user>
                        </template>
                        <template #title>个人中心</template>
                        <a-menu-item key="Biography_List">个人简介</a-menu-item>
                        <a-menu-item key="Biography_Edit">修改信息</a-menu-item>
                        <!-- <a-menu-item key="0_2">Menu 3</a-menu-item> -->
                        <!-- <a-menu-item key="0_3">Menu 4</a-menu-item> -->
                    </a-sub-menu>
                    <a-sub-menu key="Category">
                        <template #icon>
                            <icon-list />
                        </template>
                        <template #title>分类中心</template>
                        <a-menu-item key="Category_List">分类列表</a-menu-item>
                        <a-menu-item key="Category_Add">添加分类</a-menu-item>
                        <!-- <a-menu-item key="1_2">Menu 3</a-menu-item> -->
                    </a-sub-menu>
                    <a-sub-menu key="2">
                        <template #icon>
                            <icon-file />
                        </template>
                        <template #title>文章中心</template>
                        <a-menu-item key="Articles_List">文章列表</a-menu-item>
                        <a-menu-item key="Articles_Add">添加文章</a-menu-item>

                    </a-sub-menu>
                    <a-sub-menu key="3">
                        <template #icon>
                            <icon-star />
                        </template>
                        <template #title>数据中心</template>
                        <a-menu-item key="3_List">Menu 1</a-menu-item>
                        <a-menu-item key="3_Add">Menu 2</a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </a-layout-sider>

            <a-layout-content>
                <slot></slot>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script setup lang='ts'>
import Header from '@/components/Setting/Header/Header.vue';
import { reactive, watch } from 'vue';
import { goRoute } from '@/utils/goRoute'
import { useUserStore } from '@/stores/user';
const { user, QQlink } = useUserStore();
// 动态获取当前路由名称
const openKeys = reactive(['Biography_List']);
// 这里的路由跳转速度很慢，考虑可能是suspend标签的原因
function onClick(key: string) {
    openKeys[0] = key;
    const routeName = "Set" + key.split('_').join('');
    goRoute(routeName, { user_id: 1 })
}

function goSelfEdit() {
    openKeys[0] = 'Biography_Edit';
    goRoute('SetBiographyEdit', { user_id: 1 })
}



</script>

<style scoped lang='less'>
.layout-setting {
    min-height: 100vh;
    margin: 7.5vh auto;
    padding: 0 15vw;
    // height: 100000px;
}

.bottom-container {
    box-sizing: border-box;
    width: 100%;
    height: 600px;
    background-color: var(--color-neutral-2);
    margin: 3vh 0;

    // height: 100%;
    .left-sider {
        text-align: center;
        line-height: 20px;
        // height: 90vh;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 2px 15px rgb(0 0 0 / 2%);
        overflow: hidden;


        .title-text {
            font-weight: 600;
            margin-top: 0;
            margin-bottom: 10px;
        }

        .btn-text {
            line-height: 24px;
            margin-left: 5px;
        }
    }
}
</style>