<template>
    <a-layout class="layout-home">
        <a-layout-sider name="left-sider" class="left-sider">
            <!-- 个人信息相关 -->
            <AvatarBox :user="user" :QQlink="QQlink" @avatarClick="goSetting" />
            <ul class="button-box">
                <li>
                    <NavButton @click="goHome">首页</NavButton>
                </li>
                <li>
                    <NavButton @click="goLatestArticle">最新文章</NavButton>
                </li>
                <li>
                    <NavButton @click="handleDonation">请喝杯咖啡</NavButton>
                </li>
            </ul>
            <slot name="left-sider" />

            <a-link href="#" class="page-tips">Made By YeYiChen</a-link>
        </a-layout-sider>
        <a-layout-content class="content">
            <slot />
        </a-layout-content>

        <a-layout-sider name="right-sider" class="right-sider">
            <CategoryBox :link-list="linkList" title="近期文章" />
            <CategoryBox :link-list="linkList" title="分类列表" />
            <slot name="right-sider" />

        </a-layout-sider>
        <a-modal simple title="请喝杯咖啡" v-model:visible="donationVisible" :width="400" body-class="donation-box"
            @ok="handleThank" ok-text="已经打赏" cancel-text="下次一定" draggable>
            <div class="donation-box">
                <a-typography-paragraph>
                    如果您觉得我的文章对您有帮助，可以请我喝杯咖啡，谢谢！
                </a-typography-paragraph>
                <div class="donation-img" :style="{
                    width: '100%',
                    height: 'auto',
                }">
                    <img :src="user.donation" :style="{
                        width: '100%',
                        height: '100%',
                    }" />
                </div>

            </div>
        </a-modal>
    </a-layout>
    <a-back-top :visible-height='500' />
</template>

<script setup lang='ts'>
import AvatarBox from '@/components/LeftSider/AvatarBox/AvatarBox.vue'
import NavButton from '@/components/LeftSider/NavButton/NavButton.vue'
import CategoryBox from '@/components/RightSider/CategoryBox/CategoryBox.vue';
import { useUserStore } from '@/stores/user';
import { goRoute } from '@/utils/goRoute';
import { ref } from 'vue';
import { Notification } from '@arco-design/web-vue';
const { user, QQlink } = useUserStore();
const donationVisible = ref(false);
function goHome() {
    goRoute('Home');
}

function goLatestArticle() {
    goRoute('Article',);
}

function handleThank(title: string = '感谢您的支持', content: string = '您的支持是我最大的动力') {
    Notification.success({
        title,
        content,
    });
}
const handleDonation = (() => {
    let isDonate = false;
    return () => {
        if (!isDonate) {
            donationVisible.value = true;
            isDonate = true;
        } else {
            handleThank('再次感谢您的支持');
        }
    }
})();

function goSetting() {
    goRoute('Set');
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
    margin: 10vh auto 50px;
    padding: 0 10vw;

    // max-width: 70vw;
    :deep(.arco-layout-sider-children) {
        overflow: hidden !important;
    }
}

.left-sider {
    box-sizing: border-box;
    position: sticky;
    top: 10vh;
    // width: 150px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgb(0 0 0 / 2%);
    height: 100%;

    .donation-box {
        display: flex;
        flex-direction: center;
        align-items: center;

        .donation-img {
            margin-top: 10px;
            width: 200px;
            height: 200px;
            object-fit: fill;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

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
        margin-top: 20px;
        border-radius: 0 0 10px 10px;
        overflow: hidden;
    }
}


.right-sider {
    position: sticky;
    top: 1vh;
    width: 250px;
    background-color: transparent;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgb(0 0 0 / 2%);
    height: 100%;

}
</style>