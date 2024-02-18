<template>
	<div class="w-10 lg:w-11 xl:w-9 mx-auto">
		<Menubar :model="model"
			><template #start>
				<img alt="logo" src="/bflo_blue.png" height="40" />
			</template>
		</Menubar>
	</div>
</template>

<script setup>
	const navigation = useNavigationMenu()
	const model = navigation.navigationMenu()
</script>

<style scoped>
	:deep(.p-menubar) {
		padding: 0.2rem;
		/* background-color: transparent; */
		background-color: lightgray;
		border: 1px dotted black;
		border-radius: 5px;
		box-shadow: 2px 2px 2px rgb(78, 77, 77);
	}

	:deep(.p-menuitem-text) {
		font-size: small;
		/* color: white; */
	}

	@media (min-width: 992px) {
		:deep(.p-menuitem-text) {
			font-size: large;
			/* color: white; */
		}
		:deep(.p-menubar) {
			padding: 0.4rem;
		}
	}

	/* clumsy attempt to bring menu items closer together */
	@media (max-width: 960px) {
		:deep(.p-menuitem-content) {
			margin-top: -10px;
		}
	}
	@media (max-width: 480px) {
		:deep(.p-menuitem-content) {
			margin-top: -15px;
		}
	}

	/* 		*/
</style>
