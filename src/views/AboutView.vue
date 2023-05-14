<template>
	<div class="about">
		<div class="nav">nav</div>
		<AbortCom class="content"></AbortCom>
		<FooterContent class="footer"></FooterContent>
	</div>
</template>

<script setup lang="ts">
import AbortCom from '@/components/AbortCom.vue';
import FooterContent from '@/components/FooterContent.vue';
</script>

<style lang="scss" scoped>
.about{
	display: flex;
    flex-direction: column;
    align-items: center;

	.nav{
		width: 100%;
		height: 10%;
	}
	.content{
		width: 90%;
		height: 82%;
	}

	.footer{
		width: 100%;
		height: 8%;
	}
}
</style>