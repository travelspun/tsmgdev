
<script lang="ts" setup>
const hover = ref(false);
 const features = ref([
    {
        img: "/img/Travel-Suppliers.png",
        title: "Travel Suppliers",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        img:  "/img/Travel-Advisors.png",
        title: "Travel Agents",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        img: "/img/Tools-to-Succeed.png",
        title: "Tools to Succeed",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
])

</script>

<template>
    <v-container fluid id="features" class="mt-2">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
            <v-col
              cols="12"
              sm="4"
              class="text-center"
              v-for="(feature, i) in features"
              :key="i"
            >
            <v-hover v-slot="{ isHovering, props }">
                <v-card
                  class="card"
                  shaped
                  :elevation="isHovering ? 12 : 0"
                  :class="{ 'on-hover': isHovering }"
                  v-bind="props"
                >
                  <v-img
                    :src="feature.img"
                    max-width="50px"
                    class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"
                  ></v-img>
                  <h2 class="font-weight-regular">{{ feature.title }}</h2>
                  <h4 class="font-weight-regular subtitle-1">
                    {{ feature.text }}
                  </h4>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
</template>