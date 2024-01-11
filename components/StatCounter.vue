<script setup>
const props = defineProps({
    countTo: {
        type: Number,
        required: true,
    },
    textLabel: {
        type: String,
        required: true,
    },
    countSpeed: {
        type: Number,
        required: true,
    },
    
});
const { countTo, textLabel, countSpeed } = props;
const counter = ref(0);

setInterval(() => {
    if(counter.value < countTo) {
        counter.value = counter.value + countSpeed;
    }
}, 10);
</script>
<template>
    <div class="">
        <p class="flex justify-center">
            <span class="text-h3 text-white font-weight-bold">{{ counter.toLocaleString('en-US') }}</span><br>
            <span class="ucase text-white font-weight-bold"> {{ textLabel }} </span>
        </p>
    </div>
</template>
<style scoped>
    .ucase {
        text-transform: uppercase;
    }
</style>
