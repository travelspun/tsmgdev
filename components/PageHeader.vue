<script lang="ts" setup>

const props = defineProps({
    content: {
        type: Object,
        required: true,
    }
});
const { event, text } = props;
</script>

<template>
    <v-container class='mt-10 mb-5' align='center'>
        <h2>{{ content.title }}</h2>

        <p>{{ content.text }}</p>
    </v-container>
</template>