<template>
  <v-carousel hide-delimiters :show-arrows="true">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
    >
    <!-- <v-btn text @click="$vuetify.goTo('#features')" class='mt-15'>
      <span class="mr-2">{{item.title}}</span>
    </v-btn> -->
   
  </v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '/img/vegas_strip_night_d81b9f10b7.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>