<template>
	<!-- 	TRACKING = {{ TRACKING }} const TRACKINGPIXEL =
	{{ TRACKINGPIXEL }}
	<img :src="TRACKING" height="1" width="1" />
 -->
	<div class="pt-5">
		<Carousel :value="images" :numVisible="1" circular :autoplayInterval="6000">
			<template #item="slotProps">
				<div class="text-center">
					<img :src="slotProps.data.url" class="w-full" />
				</div>
			</template>
		</Carousel>
	</div>
</template>

<script setup>
	/* 	const HOSTING = 'https://thebuffalorugby.club'
	// const HOSTING = 'http://localhost:3000'

	// Testing tracking
	 const TRACKING = ref(
		`https://thebuffalorugby.club/newsletters/track?account_id=1&newsletter_id=2635`
	) 
	const TRACKING = ref(
		`${HOSTING}/newsletters/track?account_id=1&newsletter_id=2635`
	)
	const TRACKINGPIXEL = ref(
		`<img src="${TRACKING.value}" height="1" width="1"  />`
	) */

	import screen1 from '@/assets/imgs/carousel/2019_nyrc.jpg'
	import screen2 from '@/assets/imgs/carousel/2021NYRCMike.png'
	import screen3 from '@/assets/imgs/carousel/AST_1629.png'
	import screen4 from '@/assets/imgs/carousel/AST_1945.png'
	import screen5 from '@/assets/imgs/carousel/AST_6696.png'
	import screen6 from '@/assets/imgs/carousel/madison.jpeg'
	import screen7 from '@/assets/imgs/carousel/DSC_4148.png'
	import screen8 from '@/assets/imgs/carousel/DSC_5371.png'
	import screen9 from '@/assets/imgs/carousel/team.png'
	import screen10 from '@/assets/imgs/carousel/Version 2.png'

	const images = ref([
		{ id: 1, url: screen1 },
		{ id: 2, url: screen2 },
		{ id: 3, url: screen3 },
		{ id: 4, url: screen4 },
		{ id: 5, url: screen5 },
		{ id: 6, url: screen6 },
		{ id: 7, url: screen7 },
		{ id: 8, url: screen8 },
		{ id: 9, url: screen9 },
		{ id: 10, url: screen10 },
	])

	/* 	const images = ref([
		{ id: 1, url: '/carousel/2019_nyrc.jpg' },
		{ id: 2, url: '/carousel/2021NYRCMike.png' },
		{ id: 3, url: '/carousel/AST_1629.png' },
		{ id: 4, url: '/carousel/AST_1945.png' },
		{ id: 5, url: '/carousel/AST_6696.png' },
		{ id: 6, url: '/carousel/madison.jpeg' },
		{ id: 7, url: '/carousel/DSC_4148.png' },
		{ id: 8, url: '/carousel/DSC_5371.png' },
		{ id: 9, url: '/carousel/team.png' },
		{ id: 10, url: '/carousel/Version 2.png' },
	])
 */
</script>
