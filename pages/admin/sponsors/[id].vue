<script setup>
	definePageMeta({
		middleware: ['auth'],
	})
	const { onSubmitEdit } = useSubmit()

	//
	// Get sponsor id
	//
	const route = useRoute()
	const id = ref(route.params.id)
	//
	// sponsors form action
	//
	const onSubmit = async function (state) {
		await onSubmitEdit('sponsors', state)
		navigateTo(`/admin/sponsors`)
	}
</script>

<template>
	<div>
		<Head>
			<Title>Edit Sponsor {{ id }}</Title>
		</Head>
		<admin-header title="Sponsor" />

		<div class="topsectioncenter">
			<div class="topsectionitem">
				<admin-header title="Edit sponsor" />
			</div>
			<sponsors-form :id="id" @submitted="onSubmit" />
		</div>
	</div>
</template>
