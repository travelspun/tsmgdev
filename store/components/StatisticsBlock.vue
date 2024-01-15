<script setup>

</script>
<template>
    <v-container
      class="bg-primary mb-6"
	  align='center'
      fluid
    >
      <v-container>
        <v-row
            align="center"
            no-gutters
            
          >
          <v-col class='text-align-center'>
          <v-sheet class="pa-2 ma-2 bg-primary">

          <p><h1>Producers of the #1 Travel Industry Events</h1></p>
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
            style="height: 100px;"
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
