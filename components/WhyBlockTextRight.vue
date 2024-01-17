<script lang="ts" setup>
  const props = defineProps({
    event: {
        type: Object,
        required: true,
    },
    bcolor: {
        type: String,
        required: true,
    },
});
const { event, bcolor } = props;
</script>
<template>
    <v-row  no-gutters>
        <v-col>
            <EventBlockCarousel :event />
        </v-col>
        <v-col  :class="color"  align='center'>
            <EventBlockText  :event :color="bcolor"/>
        </v-col>
    </v-row>
</template>

<style scoped>
</style>
