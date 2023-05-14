<template>
    <div id="parent">
        <div v-for="(data, index) in imgList" :key="index" class="carousel-item" :class="{'active': data.active, 'start': data.start, 'end': data.end}">
            <img :src="require(`@/assets/${data.src}`)" />
        </div>
    </div>
</template>

<script setup lang="ts">
import CarouselJson from '@/assets/json/Carousel.json';
import { onMounted, onUnmounted, ref } from 'vue';

const imgList = ref<{src: string, number: number, active: boolean, start: boolean, end: boolean}[]>([]);
const animationTime = ref(1);
const autoCarousel = ref(0);
const bChange = ref(false);
const nowID = ref(0);

const SetImageList = () => {
    imgList.value = [];
    CarouselJson.imageList.forEach(item => {
        imgList.value.push({
            src: item.src,
            number: 0,
            active: false,
            start: false,
            end: false
        });
    });
    imgList.value[0].active = true;
};

const ChangeBanner = (num: number) => {
    if(bChange.value == true) return;
    bChange.value = true;

    let preID = num == 0 ? imgList.value.length - 1 : num - 1;

    imgList.value[preID].start = true;
    imgList.value[preID].active = true;
    imgList.value[num].end = true;
    imgList.value[num].active = true;

    let timeoutBanner = setTimeout(() => {
        imgList.value[preID].start = false;
        imgList.value[preID].active = false;
        imgList.value[num].end = false;
        
        nowID.value = num;
        bChange.value = false;
        clearTimeout(timeoutBanner);
    }, animationTime.value * 1000);
};

const AutoCarousel = () => {
    autoCarousel.value = setInterval(() => {
        if(nowID.value < imgList.value.length - 1)
            ChangeBanner(nowID.value + 1);//到下一張照片
        else
            ChangeBanner(0);//從頭開始
    }, 3000);
};

onMounted(() => {
    let root = document.querySelector(':root') as HTMLElement;
    root.style.setProperty('--carousel-animation-time', animationTime.value + 's');

    SetImageList();
    AutoCarousel();
});

onUnmounted(() => {
    clearInterval(autoCarousel.value);
});
</script>

<style lang="scss" scoped>
#parent{
    overflow: hidden;

    & > *{
        width: 100%;
        height: 100%;
    }
}

.carousel-item{
    display: none;
    justify-content: center;
    align-items: center;

    &.active{
        display: flex !important;
    }

    & img{
        width: 100%;
    }
}

.carousel-item.active.start{
    animation-name: carousel_start;
    animation-duration: var(--carousel-animation-time);
    animation-fill-mode: forwards;
}
.carousel-item.active.end{
    animation-name: carousel_end;
    animation-duration: var(--carousel-animation-time);
    animation-fill-mode: forwards;
}
@keyframes carousel_start {
    from{transform: translate(0%);}
    to{transform: translate(-100%);}
}
@keyframes carousel_end {
    from{transform: translate(100%);}
    to{transform: translate(0%);}
}
</style>