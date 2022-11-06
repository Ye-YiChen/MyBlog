<template>
    <div class="set-header">
        <a-avatar :size="128" shape="square">Arco</a-avatar>
        <div class="user-info">
            <a-typography-title :heading="5" class="no-margin">
                YeYiChen
            </a-typography-title>
            <a-typography-paragraph class="no-margin">
                YeYiChen's blog
            </a-typography-paragraph>
            <ul class="icon-box">
                <li>
                    <a-tooltip content="QQ" position="bottom">
                        <a-link type="text" :href="link.QQ" class="href-link" target="_blank">
                            <template #icon>
                                <icon-qq size="16" />
                            </template>
                        </a-link>

                    </a-tooltip>

                </li>
                <li>
                    <a-tooltip content="WeChat" position="bottom">
                        <a-link type="text" :href="link.WeChat" class="href-link" target="_blank">
                            <template #icon>
                                <icon-wechat size="16" />
                            </template>
                        </a-link>

                    </a-tooltip>

                </li>
                <li>
                    <a-tooltip content="GitHub" position="bottom">
                        <a-link type="text" :href="link.GitHub" class="href-link" target="_blank">
                            <template #icon>
                                <icon-github size="16" />
                            </template>
                        </a-link>

                    </a-tooltip>

                </li>

            </ul>
            <a-button type="outline">
                <template #icon>
                    <icon-edit />
                </template>
                <template #default>编辑</template>
            </a-button>
        </div>
        <a-space size="large" class="article-info">
            <a-statistic title="Articles" :value="125670" show-group-separator :value-from="0" start animation />
            <a-statistic extra="Watches" :value="125670 * 10" show-group-separator :value-from="0" start animation />
            <a-statistic title="Likes" :value="125670" show-group-separator :value-from="0" start animation />
        </a-space>
    </div>
</template>

<script setup lang='ts'>
const link = {
    QQ: '#',
    WeChat: '#',
    GitHub: "https://github.com/Ye-YiChen/MyBlog"
}

</script>

<style scoped lang='less'>
.set-header {
    display: flex;
    align-items: center;
    padding: 1vw 1.5vw;
    height: 128px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgb(0 0 0 / 2%);
}

.user-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    margin-left: 2vw;
    .no-margin {
        margin: 0;
    }
    .icon-box {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0;

        li {
            margin: 0 5px;
        }

        .href-link {
            color: #666;
        }

        :deep(.arco-btn-text) {
            color: #666;
        }
    }
}

.article-info {
    // 独自靠右
    margin: 0 auto;
}
</style>