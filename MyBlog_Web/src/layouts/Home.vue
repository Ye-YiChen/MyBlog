<template>
    <div>
        <a-layout class="layout-home" id="layout-home">
            <a-layout-sider name="left-sider" class="left-sider">
                <!-- 个人信息相关 -->
                <AvatarBox />
                <div class="button-box">
                    <NavButton @click="clickTest">首页</NavButton>
                    <NavButton>日记页面</NavButton>
                </div>
                <slot name="left-sider" />

                <a-link href="#" class="page-tips">Made By YeYiChen</a-link>
            </a-layout-sider>

            <a-layout-content class="content">
                <slot />
            </a-layout-content>

            <a-layout-sider name="right-sider" class="right-sider">
                <CategoryBox :link-list="linkList" />
                <CategoryBox :link-list="linkList" />
                <slot name="right-sider" />

            </a-layout-sider>


        </a-layout>
        <a-back-top :visible-height='500' />

    </div>
</template>

<script setup lang='ts'>
import AvatarBox from '@/components/LeftSider/AvatarBox/AvatarBox.vue'
import NavButton from '@/components/LeftSider/NavButton/NavButton.vue'
import CategoryBox from '@/components/RightSider/CategoryBox/CategoryBox.vue';
function clickTest() {
    console.log(1)
}

const linkList = [{
    text: '这是一个链接',
    link: '#',
    disabled: false,
}, {
    text: '这是一个链接2',
    link: '#',
    disabled: true,
}]

</script>

<style scoped lang='less'>
.layout-home {
    position: relative;
    margin: 100px auto 50px;
    width: 80vw;

    :deep(.arco-layout-sider-children) {
        overflow: hidden !important;
    }
}

.left-sider {
    box-sizing: border-box;
    position: sticky;
    top: 100px;
    // width: 150px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgb(0 0 0 / 2%);
    height: 100%;

    .page-tips {
        position: absolute;
        bottom: -10px;
        right: 50%;
        transform: translate(50%, 110%);
        color: #666;
        width: 100%;
    }

    .button-box {
        box-sizing: border-box;
        border-radius: 0 0 10px 10px;
        overflow: hidden;
    }
}

.content {
    background-color: #fff;
    margin: 0 20px;
    padding: 40px;
    height: 4000px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgb(0 0 0 / 2%);
}

.right-sider {
    position: sticky;
    top: 5px;
    width: 250px;
    background-color: transparent;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgb(0 0 0 / 2%);
    height: 100%;

}

</style>