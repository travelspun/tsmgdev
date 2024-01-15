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

	<v-container id='about'>
		<p class="text-body-1 text-center ma-2 pa-2">
			At TravelSMG, our sole purpose is to connect Travel Supplier Partners to
			Travel Agents on a global level. We have a proven track record of producing
			successful events that offer a balance of education, networking, and prod-
	</p>
	</v-container>	

	<v-container>
		<v-divider :thickness="3" class="border-opacity-25" inset></v-divider>
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
