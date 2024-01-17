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
    <v-row  no-gutters>
        <v-col :class="bcolor" align='center'>
            <TitleText :content='pdata.body'/>
        </v-col>
        <v-col>
            <ImageCarousel :images='pdata.images' />
        </v-col>
    </v-row>
</template>

<style scoped>
</style>
