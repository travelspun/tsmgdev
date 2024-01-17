<script lang="ts" setup>

const props = defineProps({
    event: {
        type: Object,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
});
const { event, color } = props;
</script>

<template>
        <v-card
            cover
            :class="'mx-auto ' +  color"
            flat
            height='100%'
        >
            <div
                align='center'
                class='text-align-center justify-center ma-2 pa-1'
            >
                <v-img
                    :src="event.logo"
                    width="200"
                    height='50'
                ></v-img>
            </div>
            <v-card-title class='text-h4'>
                {{event.name}}
            </v-card-title>
        
            <v-card-text>
                {{event.dates}}<br>
                {{event.property}}<br>
                {{event.location}}<br>
                
                <div class='mt-3'>
                <p>{{event.details}} <br>
                    <a :href='event.link' target='_blank' class='text-white text-h6 font-weight-bold'>LEARN MORE</a></p>
                </div>
            </v-card-text>
        
        </v-card>
</template>