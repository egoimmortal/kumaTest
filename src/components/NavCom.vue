<template>
    <nav class="navbar navbar-dark bg-dark">
		<div class="p-4 d-block d-md-none">
			<div class="bg-dark p-4">
				<router-link to="/">Home</router-link> |
				<router-link to="/vueinfo">Vueinfo</router-link> |
				<router-link to="/about">About</router-link>
			</div>
		</div>
		<div class="container-fluid d-none d-md-block">
			<router-link to="/">Home</router-link> |
			<router-link to="/vueinfo">Vueinfo</router-link> |
			<router-link to="/about">About</router-link>
		</div>
    </nav>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
		color: #42b983;
		}
	}
}
</style>