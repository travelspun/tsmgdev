<template>
	<v-app>
    <TestTopNav />
				<transition name="layout" mode='out-in'>
				<slot><router-view></router-view></slot>
				</transition>
		<FooterTest />
	</v-app>
</template>

<script>
export default {
  layout: 'blank',
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      user: {
        initials: 'JD',
        fullName: 'John Doe',
        email: 'john.doe@doe.com',
      },
      // drawer: null
    }
  },
  mounted() {
    // const theme = localStorage.getItem('useDarkTheme')
    // if (theme) {
    //   if (theme === 'true') {
    //     this.$vuetify.theme.dark = true
    //   } else this.$vuetify.theme.dark = false
    // }
  },
  methods: {
    handleSidebar(val) {
      this.drawer = val
    },
    logout() {
      // console.log('logout')
    },
  },
}
</script>