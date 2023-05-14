<template>
  <div class="home">
    <CarouselCom class="content"></CarouselCom>
  </div>
</template>

<script lang="ts" setup>
import CarouselCom from '@/components/CarouselCom.vue';
</script>

<style lang="scss" scoped>
.home{
  & > .content{
    width: 100%;
    height: 100%;
  }
}
</style>