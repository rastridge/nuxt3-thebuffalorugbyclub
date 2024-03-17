<template>
	<div>
		<h2 class="text-white">data = {{ data }}</h2>
	</div>
</template>

<script setup>
	definePageMeta({
		layout: 'false',
	})

	const url = `https://media.buffalorugby.org/api`
	// const url = `https://media.thebuffalorugby.club/api`

	const { data, error } = await useFetch(url, {
		method: 'GET',
	})
</script>
