<template>
	<div
		class="flex justify-content-center text-6xl md:text-7xl lg:text-7xl xl:text-8xl uppercase font-bold"
		style="color: rgb(210, 0, 0)"
	>
		<div class="flex align-items-center justify-content-center">
			<span class="" style="text-shadow: 2px 2px 6px rgb(0, 0, 0)"
				>Buffalo</span
			>
		</div>
		<div class="flex align-items-center justify-content-center">
			<img :src="bfloblue" class="w-6rem md:w-10rem lg:w-12rem xl:w-16rem" />
		</div>
		<div class="flex align-items-center justify-content-center">
			<span style="text-shadow: 2px 2px 6px rgb(0, 0, 0)">Rugby</span>
		</div>
	</div>
	<p class="text-center text-sm md:text-lg lg:text-xl text-white">
		Home Field Delaware Park | Meet up KO's Bar and Grille
	</p>
</template>

<script setup>
	import bfloblue from '~/assets/imgs/bflo_blue.png'
</script>
