<template>
	<div>
		<h2 class="text-white">data = {{ data }}</h2>
	</div>
</template>

<script setup>
	definePageMeta({
		layout: 'false',
	})
	const CONFIG = useRuntimeConfig()

	const url = `${CONFIG.public.IMAGES_URL}/api`

	const { data, error } = await useFetch(url, {
		method: 'GET',
	})
</script>
