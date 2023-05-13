<template>
	<div class="nav-parent">
		<img alt="Vue logo" src="../assets/logo.png">
		<nav class="navbar navbar-dark">
			<div class="nav-list p-4 d-flex d-md-none">
				<div class="p-4">
					<router-link to="/">首頁</router-link>
					<router-link to="/color">色系</router-link>
					<router-link to="/vueinfo">風格</router-link>
					<router-link to="/about">聯絡我們</router-link>
				</div>
			</div>
			<div class="nav-list container-fluid d-none d-md-flex">
				<router-link to="/">首頁</router-link>
				<router-link to="/color">色系</router-link>
				<router-link to="/vueinfo">風格</router-link>
				<router-link to="/about">聯絡我們</router-link>
			</div>
		</nav>
		<span>
			BOXING CLUB
		</span>
	</div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.nav-parent{
	height: 100%;
	display: flex;
    flex-direction: column;
    align-items: center;

	& > img{
		height: 35%;
		padding: 10%;
	}
}

nav {
	height: 60%;
    display: flex;
    align-items: flex-start;

	a {
		font-weight: bold;
		color: #747474;

		&.router-link-exact-active {
			color: var(--theme);
		}
	}

	.nav-list{
		flex-direction: column;

		& > *{
			padding-bottom: 20%;
		}
	}
}

span{
	color: #747474;
}
</style>