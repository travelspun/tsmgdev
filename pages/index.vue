<script setup lang="ts">
useHead({
	title: 'Nuxt 3, Pinia and Vuetify',
	meta: [
		{
			name: 'Nuxt 3, Pinia and Vuetify',
			content: 'Nuxt 3, Pinia and Vuetify kit',
		},
	],
});
</script>

<template>
	<SliderMain />
	

	<v-container>
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
