<template>
  <div class="base-parent">
    <NavCom id="nav"></NavCom>
    <router-view id="content" />
  </div>
</template>

<script setup lang="ts">
import NavCom from './components/NavCom.vue';
import { onMounted } from 'vue';
import colorJson from '@/assets/json/color.json';

onMounted(() => {
	let root = document.querySelector(':root') as HTMLElement;
	root.style.setProperty('--nowHeight', window.innerHeight + 'px');
  root.style.setProperty('--theme', colorJson.theme);
  root.style.setProperty('--content-footer', colorJson.contentFooter);
});
</script>

<style lang="scss">
:root {
	--window-scale: 0;
	--nowHeight: 0;
  --theme: '#FFFFFF';
  --content-footer: '#000000';
  --carousel-animation-time: 0s;
}

body{
  margin: 0px;
}

a{
  text-decoration: none !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  &, & > div{
		height: var(--nowHeight);
	}
}

.base-parent{
  display: flex;
  flex-direction: row;

  & > *{
    position: relative;
    height: 100%;
  }

  & #nav{
    width: 30%;
  }

  & #content{
    width: 70%;
  }
}
</style>