<script setup>

</script>
<template>
    <v-container
      class="bg-surface-variant mb-6"
	  align='center'
      fluid
    >
    <v-row
        align="center"
        no-gutters
        
      >
      <v-col class='text-align-center'>
			<v-sheet class="pa-2 ma-2 bg-surface-variant">

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
			<v-sheet class="pa-2 ma-2 bg-surface-variant">
				<StatCounter :countTo='12' :textLabel="'YEARS IN BUSINESS'"/>
			</v-sheet>
		</v-col>
		<v-col  class='text-align-center'>
			<v-sheet class="pa-2 ma-2 bg-surface-variant">
				<StatCounter :countTo='41' :textLabel="'EVENTS PRODUCED'"/>
			</v-sheet>
		</v-col>
		<v-col  class='text-align-center'>
			<v-sheet class="pa-2 ma-2 bg-surface-variant">
				<StatCounter :countTo='231793' :textLabel="'UNIQUE CONNECTIONS'"/>
			</v-sheet>
		</v-col>
       
      </v-row>
    </v-container>
</template>
