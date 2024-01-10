<template>
<v-container  >
    <v-row no-gutters>
      <v-col
        sm="2"
        align-self="center"
      >
        <v-sheet class="ma-2 pa-2 text-h6">
            <div class="d-flex justify-space-around align-center py-4 px-50">
                <v-icon 
                    color="red" 
                    size='75px' 
                    icon="mdi-arrow-left-bold-box"
                    @click="model = Math.max(model - 1, 0)"
                /> 
                {{model}}
                {{columns}}
                <v-icon 
                    color="red" 
                    size='75px' 
                    icon="mdi-arrow-right-bold-box"  
                    @click="model = Math.min(model + 1, columns -1)"/> 
            </div>
        </v-sheet>
      </v-col>

      <v-col>
        <v-carousel 
            v-model="model" 
            :show-arrows="false"
            hide-delimiters
            height='350'
        > 
        <template v-for="(item, index) in eventList"> 
          <v-carousel-item v-if="(index + 1) % columns === 1 || columns === 1" 
                           :key="index"
          > 
            <v-row class="flex-nowrap"> 
              <template v-for="(n,i) in columns"> 
                <template v-if="(+index + i) < eventList.length"> 
                  <v-col :key="i"> 
                    <v-sheet v-if="(+index + i) < eventList.length" >
                    <!-- :color="slider[+index + i]"
                             height="100%" -->
                      <v-row class="fill-height"
                             align="center"
                             justify="center"
                      >
                      <EventCard :event="eventList[+index + i]"/>
                      </v-row>
                    </v-sheet>
                  </v-col> 
                </template>
              </template> 
            </v-row> 
          </v-carousel-item> 
        </template> 
      </v-carousel>  
      </v-col>
    </v-row>
    </v-container>
  </template>

<script lang="ts" setup>
import { reactive, computed, watch } from 'vue'
import { useDisplay } from 'vuetify'

// Destructure only the keys you want to use
const { xs, xl, lg, md } = useDisplay()
let columns = ref(1);
const model = ref(0)

watch(xs, (val) => {
  columns.value = val ? 1 : 1;
},{immediate:true});
watch(md, (val) => {
  columns.value = val ? 2 : 1;
},{immediate:true});
watch(lg, (val) => {
  columns.value = val ? 3 : 1;
},{immediate:true});
watch(xl, (val) => {
  columns.value = val ? 4 : 1;
},{immediate:true});

const eventList = ref([
        {
            name: "Las Vegas Travel Agent Forum",
            dates: "March 24 - 27, 2024",
            location: "Las Vegas, Nevada",
            property: "Paris Las Vegas Hotel Casino & Resort",
            img: "/img/vegas_strip_night_d81b9f10b7.jpg"
        },
        {
            name: "Romance Travel Forum",
            dates: "May 6th - 9th, 2024",
            location: "Costa Mujeres, Mexico",
            property: "Secrets Playa Blanca",
            img: "/img/Slide4_0fed350bee.jpg"
        },
        {
            name: "European Travel Forum",
            dates: "October 21st – 24th, 2024",
            location: "Terceira Island The Azores, Portugal",
            property: "IHG Platinum",
            img: "/img/Slider1_1894x811_67e7cf9fe6.png"
        },
    ])
const slider = ref([
    "red", 
    "green", 
    "orange", 
    "blue", 
    "pink", 
    "purple", 
    "indigo", 
    "cyan", 
    "deep-purple", 
    "light-green", 
    "deep-orange", 
    "blue-grey"
])

</script>
