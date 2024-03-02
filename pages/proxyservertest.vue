<template>
	<div>
		<h2 class="text-white">data = {{ data }}</h2>
	</div>
</template>

<script setup>
	definePageMeta({
		layout: 'false',
	})

	// const url = `https://media.my-test-site.net/api`
	const url = `https://media.buffalorugby.org/api`

	const { data, error } = await useFetch(url, {
		method: 'GET',
	})
</script>
