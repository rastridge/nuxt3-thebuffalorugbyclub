<template>
	<div>
		<h2 class="text-white">data = {{ data }}</h2>
	</div>
</template>

<script setup>
	definePageMeta({
		layout: 'false',
	})
	const url = `https://media.my-test-site.net/api`
	const data = await fetch(url, {
		method: 'GET',
	})
</script>
