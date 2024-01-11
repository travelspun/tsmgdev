<template>
    <v-container fluid  style="padding:0px !important;margin:0px !important;">
        <v-parallax
        style="padding:0px !important;margin:0px !important;"
        src="/img/vegas_strip_night_d81b9f10b7.jpg"
    >
        <div class="d-flex flex-column fill-height justify-center 
            align-center text-white">
            <h1 class="text-h4 font-weight-bold mb-4  py-10">
                Producers of the #1 Travel Industry Trade Events
            </h1>
            <h4 class="subheading">
                Build your business face-to-face!
            </h4>
            <div class="subheading py-10">
                <v-btn 
                    size="x-large"
                    rounded="xl"
                    class='text-white font-weight-bold'
                    color='secondary' 
                    @click="scrollTo"
                >Learn More</v-btn>
            </div>
        </div>
    </v-parallax>
    </v-container>
</template>
<style scoped>
    .darken {
        filter: brightness(50%);
    }
  .v-parallax {
    padding: 0px !important;
  }
</style>

<script lang='ts' setup>
  const scrollTo = () =>  document.getElementById("about").scrollIntoView({behavior: 'smooth'});
</script>