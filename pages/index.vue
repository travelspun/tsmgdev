<script setup lang="ts">
useHead({
	title: 'Travel Show Marketing Group',
	meta: [
		{
			name: 'Travel Show Marketing Group',
			content: '#1 producer of travel industry events',
		},
	],
});
</script>

<template>
	<!-- <SliderMain /> -->
	<HeroParalax />

	<TextBlock />

	<v-container >
		<!-- <hr width='90%' /> -->
		<v-divider :length='full' :thickness="3" class="border-opacity-25"></v-divider>
	</v-container>
	
	<Features class='ma-10'/>

	<UpcomingEventsCarousel />
	
	<StatisticsBlock />
<!-- 	
	<v-container>
		<v-divider :thickness="3" class="border-opacity-25" inset></v-divider>
	</v-container> -->

	<TestimonialBlock />

</template>
