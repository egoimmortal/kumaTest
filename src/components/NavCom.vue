<template>
	<div class="nav-parent">
		<div class="left">
			{{ store.state.currentPage }}
		</div>
		<div class="right">
			Home
		</div>
	</div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

onMounted(() => {
	console.log('store.state.currentPage = ', store.state.currentPage);
});
</script>

<style lang="scss" scoped>
</style>