// plugins/vuetify.js
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import '@/assets/main.scss'

export default defineNuxtPlugin((nuxtApp) => {
	const Vuetify = createVuetify({
		ssr: false,
		theme: {
			defaultTheme: 'customTheme',
			themes: {
				customTheme: {
					dark: false,
					colors: {
						primary: '#005b90',
						secondary: '#70adcc',
						tertiary: '#5F5F5F'
						
					},
				},
			},
		},
		icons: {
			defaultSet: 'mdi',
			aliases,
			sets: {
				mdi,
			},
		},
		components,
		directives,
		
	});

	nuxtApp.vueApp.use(Vuetify);
});
