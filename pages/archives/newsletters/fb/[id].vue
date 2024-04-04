<template>
	<div>
		<span v-html="news_data.newsletter_body_html"></span>
	</div>
</template>

<script setup>
	definePageMeta({
		layout: '',
	})
	//
	// Get content id parameter
	//
	const route = useRoute()
	const news_id = ref(route.params.id)
	//
	// Get custom page content
	//
	const {
		data: news_data,
		pending,
		error,
		refresh,
	} = await useFetch(`/newsletters/${news_id.value}`, {
		method: 'get',
	})
</script>
