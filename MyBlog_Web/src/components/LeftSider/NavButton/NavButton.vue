<template>
    <button class="nav-btn">
        <slot />
    </button>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='less'>
.nav-btn {
    box-sizing: border-box;
    display: block;
    width: 100%;
    // height: 45px;
    padding: 15px;
    border: 0;
    border-top: 1px solid #eee;
    // border-bottom: 1px solid #eee;
    background-color: transparent;
    cursor: pointer;
    transition: .1s;
    overflow: hidden;
    &:hover{
        background-color: rgb(var(--arcoblue-4));
        color: #fff;
        border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    }
}
</style>