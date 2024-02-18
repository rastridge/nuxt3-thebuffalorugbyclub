<script setup>
	const router = useRouter()
</script>

<template>
	<div class="my-simple-card-style">
		<div style="alignment: center">
			<h1 class="font-bold text-5xl text-2xl text-center">
				Page not found ...
			</h1>
			<div class="col-12 mt-5 text-center">
				<Button label="Back to home" @click="router.push('/')" />
			</div>
		</div>
	</div>
</template>
