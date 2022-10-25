<template>
    <a-layout class="layout-home">
        <a-layout-sider name="left-sider" class="left-sider">
            <!-- 头像 -->
            <AvatarBox />
            <div class="button-box">
                <NavButton @click="clickTest">首页</NavButton>
                <NavButton>日记页面</NavButton>
            </div>

            <a-link href="#" class="page-tips">Made By YeYiChen</a-link>
        </a-layout-sider>

        <a-layout-content class="content">
            content
        </a-layout-content>

        <a-layout-sider name="right-sider" class="right-sider">Sider-right</a-layout-sider>
    </a-layout>
</template>

<script setup lang='ts'>
import AvatarBox from '@/components/LeftSider/AvatarBox/AvatarBox.vue'
import NavButton from '@/components/LeftSider/NavButton/NavButton.vue'
function clickTest(){
    console.log(1)
}

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
    box-sizing: content-box;
    position: sticky;
    top: 100px;
    width: 200px;
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
        border-radius: 0 0 10px 10px;
        overflow: hidden;
    }
}

.content {
    background-color: #fff;
    margin: 0 20px;
    padding: 40px;
    height: 2000px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgb(0 0 0 / 2%);
}

.right-sider {
    position: sticky;
    top: 5px;
    width: 250px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgb(0 0 0 / 2%);
    height: 100%;

}

// :deep(.arco-layout-sider) {
//     overflow: hidden !important;
// }
</style>