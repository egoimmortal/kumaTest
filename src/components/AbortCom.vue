<template>
    <div class="abort-content">
        <div class="title">
            <span>
                專業是我們的基礎、質感是我們的堅持、聆聽您的需求是我們的榮幸，酷碼在此期待與您共同發展
            </span>
        </div>
        <div>
            <span>姓名(必填)</span>
            <input value="" placeholder="請輸入姓名" />
        </div>
        <div>
            <span>稱謂</span>
            <input value="" placeholder="請輸入稱謂" />
        </div>
        <div>
            <span>電子郵件(必填)</span>
            <input value="" placeholder="請輸入電子郵件" />
        </div>
        <div>
            <span>主旨</span>
            <input value="" placeholder="請輸入主旨" />
        </div>
        <div>
            <span>留言</span>
            <textarea placeholder="請輸入留言"></textarea>
        </div>
        <div class="send">
            <span>傳送</span>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.abort-content{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    & > div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
    & > div:first-child, & > div:last-child{
        align-items: center;
    }

    input, input:focus, textarea, textarea:focus{
        width: 100%;
        border: solid 1px #E0E0E0;
    }

    .title{
        background-color: #E0E0E0;
    }

    .send{
        width: 100%;
        color: #FFFFFF;
        border-radius: 15px;
        border: solid 3px var(--theme);
        background-color: var(--theme);
        opacity: 0.8;

        &:active{
            opacity: 0.5;
        }
    }
}
</style>