
<script lang="ts" setup>
import { reactive, computed, watch } from 'vue'
import { useDisplay } from 'vuetify'

// Destructure only the keys you want to use
const { xs, xl, lg, md, sm } = useDisplay()
let columns = ref(2);
const model = ref(0)

watch(xs, (val) => {
  columns.value = val ? 1 : 1;
},{immediate:true});
watch(sm, (val) => {
  columns.value = val ? 1 : 1;
},{immediate:true});
watch(md, (val) => {
  columns.value = val ? 2 : 2;
},{immediate:true});
watch(lg, (val) => {
  columns.value = val ? 3 : 3;
},{immediate:true});
watch(xl, (val) => {
  columns.value = val ? 2 : 2;
},{immediate:true});

const eventList = ref([
        {
            name: "Las Vegas Travel Agent Forum",
            dates: "March 24 - 27, 2024",
            location: "Las Vegas, Nevada",
            property: "Paris Las Vegas Hotel Casino & Resort",
            img: "/img/LVTAF_Home_600x338.png"
        },
        {
            name: "Romance Travel Forum",
            dates: "May 6th - 9th, 2024",
            location: "Costa Mujeres, Mexico",
            property: "Secrets Playa Blanca",
            img: "/img/RTF_Home_600x338.png"
        },
        {
            name: "European Travel Forum",
            dates: "October 21st – 24th, 2024",
            location: "Terceira Island The Azores, Portugal",
            property: "IHG Platinum",
            img: "/img/ETAF_Home_600x338.png"
        },
        {
            name: "Owners Travel Forum",
            dates: "October 21st – 24th, 2024",
            location: "Terceira Island The Azores, Portugal",
            property: "IHG Platinum",
            img: "/img/TAOF_Home_600x338.png"
        },
        {
            name: "Family Travel Forum",
            dates: "May 6th - 9th, 2024",
            location: "Costa Mujeres, Mexico",
            property: "Secrets Playa Blanca",
            img: "/img/FTAF_Home_600x338.png"
        },
        {
            name: "Amazing Destination Experience",
            dates: "May 6th - 9th, 2024",
            location: "Costa Mujeres, Mexico",
            property: "Secrets Playa Blanca",
            img: "/img/ADE_Home_600x338.png"
        },
        
    ])
const slider = ref([
    "red", 
    "green", 
    "orange", 
    "blue"
])

</script>


<template>
  <v-container>
  <!-- {{xs}},  {{ sm }} ,<br>
   {{xl}}, {{lg}}, {{md}},
  Colls
  {{ columns }} -->
    <v-row no-gutters  cols='2'>
      <v-col 
        align-self="center"
        max-width='150px'
      >
      <h2>Current Event Schedule</h2>
        <v-sheet class="ma-2 pa-2 text-h6">
          <div class="d-flex align-center py-4 px-10">
              <v-img
                    src="/img/Arrow-Left.png"
                    class='mr-10'
                    max-width="50px"
                    width="50"
                    @click="model = Math.max(model - 1, 0)"
                  ></v-img>
              
                <v-img
                    src="/img/Arrow-Right.png"
                    width="50"
                    max-width="50px"
                    @click="model = Math.min(model + 1, columns)"
                  ></v-img>
            </div>
        </v-sheet>
      </v-col>

      <v-col align='left'>
        <v-carousel 
            v-model="model" 
            :show-arrows="false"
            hide-delimiters
            height="300"
        > 
        <template v-for="(item, index) in eventList"> 
          <v-carousel-item 
              v-if="(index + 1) % columns === 1 || columns === 1" 
              :key="index"
          > 
            <v-row class="flex-nowrap "> 
              <template v-for="(n,i) in columns"> 
                <template v-if="(+index + i) < eventList.length"> 
                  <v-col :key="i"> 
                    <v-sheet v-if="(+index + i) < eventList.length">
                        <EventCard :event="eventList[+index + i]"/>
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
