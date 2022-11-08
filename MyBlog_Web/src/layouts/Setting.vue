<template>
    <a-layout class="layout-setting">
        <a-layout-header>
            <Header />
        </a-layout-header>
        <a-layout class="bottom-container">
            <a-layout-sider class="left-sider" collapsible :step="10">
                <a-menu :default-open-keys="['0']" :default-selected-keys="['0_0']" breakpoint="xl"
                    auto-scroll-into-view @menu-item-click="onClick">
                    <a-sub-menu key="0">
                        <template #icon>
                            <icon-user></icon-user>
                        </template>
                        <template #title>个人中心</template>
                        <a-menu-item key="0_0">个人简介</a-menu-item>
                        <a-menu-item key="0_1">修改信息</a-menu-item>
                        <!-- <a-menu-item key="0_2">Menu 3</a-menu-item> -->
                        <!-- <a-menu-item key="0_3">Menu 4</a-menu-item> -->
                    </a-sub-menu>
                    <a-sub-menu key="1">
                        <template #icon>
                            <icon-list />
                        </template>
                        <template #title>分类中心</template>
                        <a-menu-item key="1_0">分类列表</a-menu-item>
                        <a-menu-item key="1_1">添加分类</a-menu-item>
                        <!-- <a-menu-item key="1_2">Menu 3</a-menu-item> -->
                    </a-sub-menu>
                    <a-sub-menu key="2">
                        <template #icon>
                            <icon-file />
                        </template>
                        <template #title>文章中心</template>
                        <a-menu-item key="2_0">文章列表</a-menu-item>
                        <a-menu-item key="2_1">添加文章</a-menu-item>

                    </a-sub-menu>
                    <a-sub-menu key="3">
                        <template #icon>
                            <icon-star />
                        </template>
                        <template #title>数据中心</template>
                        <a-menu-item key="3_0">Menu 1</a-menu-item>
                        <a-menu-item key="3_1">Menu 2</a-menu-item>
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
import { goRoute } from '@/utils/route'

const links = {
    '0_0': 'SetBiographyList',
    '0_1': 'SetBiographyEdit',
    '1_0': 'SetCategoryList',
    '1_1': 'SetCategoryAdd',
    '2_0': 'SetArticlesList',
    '2_1': 'SetArticlesAdd',
}
/**
 * 点击菜单=>对应的路由名称
 */
const navs: Map<string, string> = new Map(Object.entries(links))

function onClick(key: string) {
    const name = navs.get(key)!;
    goRoute(name);
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