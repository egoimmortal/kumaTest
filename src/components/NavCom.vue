<template>
	<div class="nav-parent">
		<div>
			<div class="left">
				{{ currentRouterName }}
			</div>
			<div class="right">
				Home
				<span v-if="currentRouterName != ''">
					&nbsp;>&nbsp;{{ currentRouterName }}
				</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const currentRouterName = ref('');

onMounted(() => {
	const router = useRouter();
	currentRouterName.value = router.currentRoute.value.name as string;
});
</script>

<style lang="scss" scoped>
.nav-parent{
	background-color: #E0E0E0;
	display: flex;
	align-items: center;
    justify-content: center;

	& > div{
		width: 90%;
		display: flex;
		justify-content: space-between;
	}
}
</style>