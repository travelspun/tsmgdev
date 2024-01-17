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
		</div>
	</NuxtLayout>
</template>
