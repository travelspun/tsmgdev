<template>
    <v-container fluid >
        <v-row no-gutters>
          <v-col
            sm="2"
          >
            <v-sheet class="ma-2 pa-2 text-h6">
                <div class="d-flex justify-space-around align-center py-4 px-50">
                    <v-btn
                    variant="text"
                    icon="mdi-minus"
                    @click="model = Math.max(model - 1, 0)"
                    ></v-btn>
                    {{ model }}
                    <v-btn
                    variant="text"
                    icon="mdi-plus"
                    @click="model = Math.min(model + 1, 4)"
                    ></v-btn>
                </div>
            </v-sheet>
          </v-col>
          <v-col
           
           
          >
          <v-carousel v-model="model" hide-delimiters> 
            <template v-for="(event, index) in eventList"> 
              <v-carousel-item v-if="(index + 1) % columns === 1 || columns === 1" 
                               :key="index"
              > aa {{ event }}
                <v-row class="flex-nowrap" style="height:100%"> 
                    
                  <template v-for="(n,i) in columns"> 
                   
                    <template v-if="(+index + i) < slider.length"> 
                       
                      <v-col :key="i"> 
                        <EventCard :event="event[index]"/>
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
      </template>event[i]
    
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
            dates: "March 1 - 4, 2024",
            location: "Las Vegas, Nevada",
            img: ""
        },
        {
            name: "Romance Travel Forum",
            dates: "May 8 - 11, 2024",
            location: "Barbados",
            img: ""
        },
        {
            name: "Las Vegas Travel Agent Forum",
            dates: "March 1 - 4, 2024",
            location: "Las Vegas, Nevada",
            img: ""
        },
        {
            name: "European Travel Forum",
            dates: "September 12 - 16, 2024",
            location: "Turkey",
            img: ""
        },
    ])
    
    // const columns = computed(() => {
    //     if (xs) {
    //         return 1;
    //     }
    
    //     if (xl) {
    //         return 4;
    //     }
    
    //       if (lg) {
    //         return 3;
    //       }
    
    //       if (md) {
    //         return 2;
    //       }
          
    // })
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
    