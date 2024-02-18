<template>
	<div>
		<Head>
			<Title>Admin Users List</Title>
		</Head>
		<div class="topsectioncenter">
			<div class="topsectionitem">
				<admin-header :title="app" />
			</div>
		</div>
		<!-- 		<div v-if="!users" class="text-center text-2xl">
			<ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar
			>Loading ...
		</div>
 -->
		<div>
			<render-list
				:data="users"
				:page="page"
				:app="app"
				:statusable="statusable"
				:editable="editable"
				:deleteable="deleteable"
				:addable="addable"
				:viewable="viewable"
				@changeStatus="changeStatus"
				@deleteItem="deleteItem"
			/>
		</div>
	</div>
</template>

<script setup>
	definePageMeta({
		middleware: ['auth'],
	})
	import { useAlertStore } from '~/stores/alertStore'
	import { usePlacemarkStore } from '~/stores'
	const placemark = usePlacemarkStore()

	const alert = useAlertStore()
	const { getAll, deleteOne, changeStatusOne } = useFetchAll()

	//
	// Initialize values for Renderlist
	//
	const { getAccess } = useRenderListAccess()
	const app = 'users'
	const page = ref(placemark.getPage)

	const { editable, addable, deleteable, statusable, viewable } = getAccess(app)

	//
	// Get all users
	//
	const { data: users, pending } = await getAll('users')

	//
	// Renderlist actions
	//
	const deleteItem = async (id) => {
		await deleteOne(app, id)
	}
	const changeStatus = async ({ id, status }) => {
		await changeStatusOne(app, { id, status })
	}
</script>
