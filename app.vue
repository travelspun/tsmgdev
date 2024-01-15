<script lang="ts" setup>
const Route = useRoute();
const {
	public: { baseUrl },
} = useRuntimeConfig();
</script>

<template>
	 <!-- <v-content>
      <router-view></router-view>
    </v-content> -->
	<NuxtLayout>
		<div
			class="d-flex flex-column justify-center align-center"
		>
			<NuxtPage />

			<NuxtLink
				v-if="Route.path !== baseUrl"
				:to="baseUrl"
				class="text-h6 text-primary mt-3"
			>
				Return Home
			</NuxtLink>
		</div>
	</NuxtLayout>
</template>
