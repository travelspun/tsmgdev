<script lang='ts' setup>
</script>
<template>
    <v-container
      class="bg-primary"
	    align='center'
      fluid
    >
      <v-container 
        fluid class="bg-primary"
      >
        <v-row
          align="center"
          no-gutters
          fluid
          cols='3'
        >
          <v-col class='text-align-center'>
            <v-sheet class="pa-2 ma-2 bg-primary">
              <p></p>
                <h1>Producers of the #1 Travel Industry Events</h1>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </v-sheet>
          </v-col>
        </v-row>

        <v-row 
          align="center"
          no-gutters
          cols='12'
        >
          <v-col class='text-align-center'>
            <h2 class='pa-2 ma-2 text-align-center' align='center'>TravelSMG by the Numbers</h2>
          </v-col>
        </v-row>
        <v-row
          align="center"
          no-gutters
          fluid
        >
          <v-col class='text-align-center'>
            <v-sheet class="pa-2 ma-2 bg-primary">
              <StatCounter 
                :countTo='12' 
                :textLabel="'YEARS IN BUSINESS'"
                :countSpeed='1'
              />
            </v-sheet>
          </v-col>
          <v-col  class='text-align-center'>
            <v-sheet class="pa-2 ma-2 bg-primary">
              <StatCounter 
                :countTo='41' 
                :textLabel="'EVENTS PRODUCED'"
                :countSpeed='1'
              />
            </v-sheet>
          </v-col>
          <v-col  class='text-align-center'>
            <v-sheet class="pa-2 ma-2 bg-primary">
              <StatCounter 
                :countTo='231793' 
                :textLabel="'UNIQUE CONNECTIONS'"
                :countSpeed='100'
              />
            </v-sheet>
          </v-col>
          
        </v-row>
      </v-container>
    </v-container>
</template>
