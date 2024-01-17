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
    <v-row cols='auto' no-gutters>
        <v-col  align='center' class='bg-primary'>
            <ImageCarousel :images='event.images' />
        </v-col>
        <v-col  :class="color"  align='center'  class='bg-primary'>
            <EventBlockText  :event :color="bcolor"/>
        </v-col>
    </v-row>
</template>

<style scoped>
</style>
