<template>
    <div class="footer">
        <span>
            酷碼科技
        </span>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@media (max-width: 576px) {
    .footer span{
        text-align: center;
    }
}
@media (min-width: 577px) {
    .footer span{
        text-align: start;
    }
}
.footer{
    position: absolute;
    bottom: 0px;
    color: #E0E0E0;
    background-color: var(--content-footer);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span{
        width: 90%;
        
    }
}
</style>