<template>
    <div class="home">
        <Home>
            <CustomPicBox :picList="picList" />
            <a-divider orientation="center" class="mid-divider" margin="50px">最新文章</a-divider>
        </Home>
    </div>
</template>

<script setup lang='ts'>
import Home from '@/layouts/Home.vue'
import CustomPicBox from '../../components/Main/CustomPicBox/CustomPicBox.vue'

const picList = [{
    src: '../public/big-pic.jpg',
    title: 'this is a title',
    description: 'this is a long long description'
},
{
    src: '../public/big-pic.jpg',
    title: 'this is a title',
    description: 'this is a long long description'
},
{
    src: '../public/small-pic.jpg',
    title: 'this is a title',
    // description: 'this is a long long description'
},
{
    src: '../public/small-pic.jpg',
    title: 'this is a title',
    // description:'this is a long long description'
},
{
    src: '../public/big-pic.jpg',
    title: 'this is a title',
    description: 'this is a long long description'
},

{
    src: '../public/big-pic.jpg',
    title: 'this is a title',
    description: 'this is a long long description'
},]
</script>

<style scoped lang='less'>
.home {
    margin: 0 auto;
}

.mid-divider {
    :deep(.arco-divider-text) {
        font-size: 18px;
        font-weight: 700;
        color: #333;
    }
}
</style>