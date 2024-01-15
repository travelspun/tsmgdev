<script lang="ts" setup>
import { onMounted, watch } from 'vue';

const color = '#ffffff';
const flat = false;
let isXs = ref(false);
const drawer = ref(false);

const navItems = [
  {
    text: 'Events',
    link: '#events'
  },
  {
    text: 'Why TravelSMG',
    link: '#why',
    subNav: [
      {
        text: 'Press/Blog',
        link: '#press'
      }
    ]
  },
  {
    text: 'About',
    link: '#about'
  }
];


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
      <v-img src="/img/tsmglogo.png" max-width="276px" />
      <v-list dense>
        <v-list-item
          v-for="(nav, i) in navItems"
          :key="i"
          link
          @click="$vuetify.goTo(nav.link)"
        >
        <!-- <v-icon>{{ icon }}</v-icon> -->
        <!-- <v-btn 
          text @click="$vuetify.goTo(link)"> -->
            <span class="mr-2">{{nav.text}}</span>
            <v-list-item
              v-if="nav.subNav"
              v-for="(sub, i) in nav.subNav"
              :key="i"
              link
              @click="$vuetify.goTo(sub.link)"
            >
              <span class="mr-2">{{sub.text}}</span>
            </v-list-item>
          <!-- </v-btn> -->
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

    <v-app-bar-nav-icon @click="drawer = true" 
      class="d-flex d-sm-none" 
    ></v-app-bar-nav-icon>

      <v-app-bar-title>
        <v-img src="/img/tsmglogo.png" max-width="276px" />
      </v-app-bar-title>
      <v-spacer />
      
      <div 
        class='d-none d-sm-flex'>
      
        <div 
          v-for="(nav, i) in navItems"
          :key="i"
        >
          <v-btn 
              v-if="!nav.subNav"
              flat 
              @click="$vuetify.goTo(nav.link)"
              color='primary' 
            > 
            <span class="mr-2">{{nav.text}}</span>
          </v-btn>

          <v-menu
            v-else
            open-on-hover
          >
            <template v-slot:activator="{ props }">
              <v-btn 
                v-bind="props"
                text @click="$vuetify.goTo(nav.link)"
                color='primary' 
              > 
                <span class="mr-2">{{nav.text}}</span>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(sItem, index) in subNav"
                :key="index"
              >
                <v-list-item-title>
                  <v-btn text @click="$vuetify.goTo('#features')">
                    <span class="mr-2">{{sItem.title}}</span>
                  </v-btn>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>


<!--  -->

        <!-- <v-btn 
          color='primary' 
          text @click="$vuetify.goTo('#hero')"
        >
          <span class="mr-2">Events</span>
        </v-btn>
        
          <v-menu
            open-on-hover
          >
            <template v-slot:activator="{ props }">
              <v-btn
                color='primary'
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
        
            <v-btn  
                text 
                color='primary'
                @click="$vuetify.goTo('#download')">
              <span class="mr-2">About</span>
            </v-btn> -->

      </div>
    </v-app-bar>
</template>

<style scoped>
.v-app-bar-title {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>
