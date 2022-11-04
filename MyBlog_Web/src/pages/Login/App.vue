<template>
    <Login bgc="/src/assets/img/wallhaven-0jjqrq.jpg">
        <div class="main-box">
            <div class="title">
                <h2>MyBlog</h2>
                <h4>记录生活的点点滴滴</h4>
            </div>
            <div class="login-box">
asdas
            </div>
        </div>
    </Login>

</template>

<script setup lang='ts'>
import Login from '@/layouts/Login.vue';


</script>

<style scoped lang='less'>
.login-page {
    height: 100%;
    width: 100%;
}

h2,
h4 {
    margin: 0;
}

.main-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;

    h2 {
        font-size: 50px;
        margin-bottom: 2vh;
    }

    h4 {
        font-size: 20px;
        letter-spacing: 0.5vw;
        font-weight: 400;
    }
    .login-box{box-sizing: border-box;
        margin-top: 5vh;
        width: 30vw;
        background-color: white;
        padding: 24px 32px 0;
        border-radius: 10px;
    }
}
</style>