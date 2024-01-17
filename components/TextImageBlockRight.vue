<script lang="ts" setup>
  const props = defineProps({
    pdata: {
        type: Object,
        required: true,
    },
    bcolor:  {
        type: String,
        required: true,
    },
});
const { pdata, bcolor } = props;
</script>
<template>
    <v-row  cols='2' no-gutters>
        <v-col  align='center'>
            <ImageCarousel :images='pdata.images' />
        </v-col>
        <v-col  :class="bcolor"  align='center'>
            <TitleText :content='pdata.body'/>
        </v-col>
    </v-row>
</template>

<style scoped>
</style>
