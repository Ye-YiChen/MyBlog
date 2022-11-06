<template>
    <a-layout class="layout-setting">
        <a-layout-header>
            <Header />
        </a-layout-header>
        <a-layout class="bottom-container">
            <a-affix :offsetTop="10">
                <a-layout-sider class="left-sider">
                    <a-typography-title :heading="4" class=" title-text">
                        个人中心
                    </a-typography-title>
                    <!-- <a-divider :margin="10" /> -->
                    <NavButton>
                        <icon-user size="16" />
                        <span class="normal-text btn-text">个人简介</span>
                    </NavButton>
                    <NavButton>
                        <icon-edit size="16" />
                        <span class="normal-text btn-text">发表文章</span>
                    </NavButton>
                    <NavButton>
                        <icon-file size="16" />
                        <span class="normal-text btn-text">所有文章</span>
                    </NavButton>
                </a-layout-sider>
            </a-affix>
            <a-layout-content>
                <slot></slot>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script setup lang='ts'>
import Header from '@/components/Setting/Header/Header.vue';
import NavButton from '@/components/LeftSider/NavButton/NavButton.vue';
</script>

<style scoped lang='less'>
.layout-setting {
    min-height: 100vh;
    margin: 10vh auto;
    padding: 0 10vw;
    height: 100000px;
}

.bottom-container {
    position: relative;
    margin: 3vh 0;

    .left-sider {
        text-align: center;
        line-height: 20px;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 2px 15px rgb(0 0 0 / 2%);
        padding: 20px 0 0;
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