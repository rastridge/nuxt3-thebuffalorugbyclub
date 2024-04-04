<template>
	<div>
		<Head>
			<Title>Edit Newsletter {{ id }}</Title>
		</Head>

		<div class="topsectioncenter">
			<div class="topsectionitem">
				<admin-header title="Edit Newsletter" />
			</div>
			<div class="topsectionitem">
				<div class="p-2 w-full border-1">
					<SocialShare
						network="facebook"
						url="https://buffalorugby.org/archives/newsletters/page/2666"
					/>
				</div>
			</div>
			<newsletters-form :id="id" @submitted="onSubmit" />
		</div>
	</div>
</template>

<script setup>
	definePageMeta({
		middleware: ['auth'],
	})
	import Swal from 'sweetalert2'
	import { useAlertStore } from '~/stores/alertStore'
	const alert = useAlertStore()
	const { editNewsletter } = useNewsletter()

	/* 	const shareFacebook = useSocialShare({
		network: 'facebook',
		url: 'https://buffalorugby.org/archives/newsletters/page/2666',
	}) */

	//
	// Get news item id
	//
	const route = useRoute()
	const id = ref(route.params.id)
	//
	// Newsletters form action
	//
	const onSubmit = async function (state) {
		Swal.fire({
			title: 'What to do?',
			showDenyButton: true,
			showCancelButton: true,
			showConfirmButton: true,
			confirmButtonText: `Send now`,
			denyButtonText: `Send later`,
		}).then((result) => {
			if (result.isConfirmed) {
				editNewsletter(state, 'sendNow')
				// Swal.fire('Saved and Sent', '', 'success')
				// navigateTo('/admin/newsletters')
			} else if (result.isDenied) {
				editNewsletter(state, 'sendLater')
				// Swal.fire('Saved', '', 'success')
				// navigateTo('/admin/newsletters')
			} else if (result.isDismissed) {
				// navigateTo('/admin/newsletters')
			}
			navigateTo('/admin/newsletters')
		})
	}
</script>

<style lang="scss" scoped>
	@import 'sweetalert2/src/sweetalert2.scss';
</style>
