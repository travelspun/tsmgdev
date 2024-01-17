<script lang="ts" setup>

const props = defineProps({
    images: {
        type: Array,
        required: true,
    }
});
const slideInterval = ref(Math.floor(Math.random() * 1000) + 3000);


const { images } = props;

</script>

<template>
    <v-carousel 
        cycle='true' 
        :interval="slideInterval"  
        height="300" 
        hide-delimiters 
        :show-arrows="false"
        >
        
        <template v-for="(img, index) in images"> 
            <v-fade-transition>
                <v-carousel-item
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                    :src="img"
                    cover
                ></v-carousel-item>
            </v-fade-transition>
        </template>

    </v-carousel>
</template>