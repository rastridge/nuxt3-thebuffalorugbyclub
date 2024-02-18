<script setup>
	import { useMenuStore, useAuthStore } from '@/stores'
	import '@formkit/themes/genesis'
	const auth = useAuthStore()
	const menuStore = useMenuStore()

	useHead({
		title: 'The Buffalo Rugby Club',
	})

	useSeoMeta({
		title: 'The Buffalo Rugby Club',
		ogTitle: 'The Buffalo Rugby Club',
		description: 'Welcome to the Buffalo Rugby Club',
		ogDescription: 'Welcome to the Buffalo Rugby Club',
		ogImage: 'https://thebuffalorugby.club/bflo_blue.png',
	})
	//
	// get custom menu items
	await menuStore.initCustomMenuItems()

	// stay logged in?
	if (localStorage.getItem('auth')) {
		auth.loginAuto()
	}
</script>

<template>
	<NuxtLayout>
		<div>
			<NuxtLoadingIndicator :height="10" />
			<NuxtPage />
		</div>
	</NuxtLayout>
</template>

<style lang="scss">
	@import 'App.scss';
</style>
