<template>
    <v-footer  padless :color='color'>
         
        <v-card flat tile class="secondary text-center"  :color='color'>
            
       <v-card-text>
            <div align="center"  class='ma-0 pa-0 my-0 py-0'>
                <v-img  class='ma-5' src="/img/tsmglogo.png" width="276px" /><br />
            </div>
            <v-btn
                v-for="icon in icons"
                :key="icon.text"
                class="mx-3"
                variant="plain"
                size="large"
                :href="icon.link"
                target="_blank"
                >
                <v-icon color="primary" size='large' :icon="icon.text"  /> 
                <!-- {{icon.text}}<v-icon color="red" :icon="icon.text"  size="24px">o99{{ icon.text }}</v-icon> -->
            </v-btn>
            <!-- <v-btn
                color="blue-darken-2" 
                v-for="(icon, i) in icons"
                :key="i"
                class="mx-4 "
                :href="icon.link"
                target="_blank"
                icon
            >ss
            <v-icon color="red"  size="24px">o99{{ icon.text }}</v-icon>
            </v-btn> -->
        </v-card-text>

        <v-card-text class="text-white pt-0">
            <nuxt-link to="/events">
                <v-btn color='transparent' elevation='0' text>
                    <span class="mr-2 text-primary">Events</span>
                </v-btn> 
            </nuxt-link>
            <nuxt-link to="/why">
                <v-btn color='transparent' elevation='0' text>
                    <span class="mr-2 text-primary">Why TravelSMG</span>
                </v-btn>
            </nuxt-link>
            <nuxt-link to="/about">
                <v-btn color='transparent' elevation='0' text>
                    <span class="mr-2 text-primary">About</span>
                </v-btn>
            </nuxt-link>
            
           
           
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="text-white">
            {{ new Date().getFullYear() }} — <strong>Travel Show Marketing All Rights Reserved</strong>
        </v-card-text>
        </v-card>
    </v-footer>
  </template>
  <style scoped>
  .v-card { 
    width: 100%;
  }
  </style>
<script lang="ts" setup>

const color = '#ffffff';

    const icons = ref([
        {
            text: "mdi-facebook",
            link: "https://facebook.com",
        },
        {
            text: "mdi-instagram",
            link: "https://instagram.com",
        },
        {
            text: "mdi-linkedin",
            link: "https://linkedin.com",
        },
        {
            text: "mdi-youtube",
            link: "https://youtube.com",
        },
        
        
    ])
  </script>