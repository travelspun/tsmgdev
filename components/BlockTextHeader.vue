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
            <v-card-text>
                {{content.text}}<br>
                {{event.property}}<br>
                {{event.location}}<br>
                
                <div class='mt-3'>
                <p>{{event.details}} <br>
                    <a :href='event.link' target='_blank' class='font-weight-bold'>LEARN MORE</a></p>
                </div>
            </v-card-text>
        
        </v-card>
</template>