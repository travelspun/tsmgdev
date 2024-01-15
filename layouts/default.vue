<template>
	<v-app app>
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
    }
  },
  mounted() {
  
  },
  methods: {
   
  },
}
</script>