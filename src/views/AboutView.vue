<template>
	<div class="about">
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
	& .content{
		width: 100%;
		height: 92%;
	}

	& .footer{
		width: 100%;
		height: 8%;
	}
}
</style>