<script lang="ts" setup>
import { onMounted, watch } from 'vue';

const color = 'primary';
const flat = false;
let isXs = ref(false);
const drawer = ref(false);

const items =  [
      ["mdi-home-outline", "Home", "#hero"],
      ["mdi-information-outline", "Sobre", "#features"],
      ["mdi-download-box-outline", "Download", "#download"],
      ["mdi-currency-usd", "Preços", "#pricing"],
      ["mdi-email-outline", "Contatos", "#contact"],
    ]
  
   const subItems = ref([
        { title: 'Press/Blog' }
      ]);

const onResize = () => {  isXs = window.innerWidth < 850; }

watch(isXs, (value) => {
  if (!value) {
      if (this.drawer) {
        this.drawer = false;
      }
    }
});

onMounted(() => {
  onResize();
  window.addEventListener("resize", onResize, { passive: true });
});

</script>

<template>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      dark
      src="/img/bgDrawer.jpg"
    >

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="([icon, text, link], i) in items"
          :key="i"
          link
          @click="$vuetify.goTo(link)"
        >
            <v-icon>{{ icon }}</v-icon>
         
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      :color="color"
      :flat="flat"
      dark
      class="px-15"
      :class="{ expand: flat }"
    >
      <v-toolbar-title>
        <v-img src="/img/tsmglogo.png" max-width="276px" />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      />
      <div v-else>
        <v-btn text @click="$vuetify.goTo('#hero')">
          <span class="mr-2">Events</span>
        </v-btn>
        
          <v-menu
            open-on-hover
          >
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
              >
              Why TravelSMG
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, index) in subItems"
                :key="index"
              >
                <v-list-item-title>
                  <v-btn text @click="$vuetify.goTo('#features')">
                    <span class="mr-2">{{item.title}}</span>
                  </v-btn>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        
        <v-btn rounded text @click="$vuetify.goTo('#download')">
          <span class="mr-2">About</span>
        </v-btn>
      </div>
    </v-app-bar>
</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>
