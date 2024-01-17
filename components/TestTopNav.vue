<script lang="ts" setup>
import { onMounted, watch } from 'vue';

const color = '#ffffff';
const flat = false;
const isXs = ref(false);
const drawer = ref(false);

const navItems = [
  {
    text: 'Events',
    link: '/events'
  },
  {
    text: 'Why TravelSMG',
    link: '/why',
    subNav: [
      {
        text: 'Press/Blog',
        link: '/press'
      }
    ]
  },
  {
    text: 'About',
    link: '/about'
  }
];


const onResize = () => {  isXs.value = window.innerWidth < 850; }

watch(isXs, (value) => {
  if (!value) {
      if (drawer) {
        drawer.value = false;
      }
    }
});

onMounted(() => {
  onResize();
  window.addEventListener("resize", onResize, { passive: true });
});

</script>

<template>
  <div>
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
        >
        <!-- <v-icon>{{ icon }}</v-icon> -->
        <nuxt-link :to="nav.link">
          <v-btn flat >
            <span class="mr-2">{{nav.text}}</span>
          </v-btn>
        </nuxt-link>
       
            <v-list-item
            v-for="(sub, i) in nav.subNav"
              v-if="nav.subNav"
              :key="i"
            >
            <nuxt-link :to="sub.link" class='pl-2'>
              <v-btn 
                flat 
              > 
              <span class="mr-2">{{sub.text}}</span>
              </v-btn>
            </nuxt-link>
            </v-list-item>
          <!-- </v-btn> -->
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    

    <v-app-bar
      app
      :color="color"
      :flat="flat"
      class="px-15"
      :class="{ expand: flat }"
    >
   
    <v-app-bar-nav-icon 
    class="d-flex d-sm-none" 
      @click="drawer = true" 
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
          <nuxt-link :to="nav.link"  v-if="!nav.subNav"> 
            <v-btn 
                v-if="!nav.subNav"
                flat 
                @click="$vuetify.goTo(nav.link)"
                color='primary' 
              > 
              <span class="mr-2">{{nav.text}}</span>
            </v-btn>
          </nuxt-link>
          <!-- <v-btn 
              v-if="!nav.subNav"
              flat 
              @click="$vuetify.goTo(nav.link)"
              color='primary' 
            > 
            <span class="mr-2">{{nav.text}}</span>
          </v-btn> -->

          <v-menu
            v-else
            open-on-hover
          >
            <template v-slot:activator="{ props }">
               <nuxt-link :to="nav.link">
                  <v-btn 
                  v-bind="props"
                  text @click="$vuetify.goTo(nav.link)"
                  color='primary' 
                  > 
                    <span class="mr-2">{{nav.text}}</span>
                  </v-btn>
              </nuxt-link>
<!-- 
              <v-btn 
                v-bind="props"
                text @click="$vuetify.goTo(nav.link)"
                color='primary' 
              > 
                <span class="mr-2">{{nav.text}}</span>
              </v-btn> -->
            </template>

            <v-list>
              <template v-for="(sItem, index) in nav.subNav">
                <v-list-item  >
                  <nuxt-link :to="sItem.link">
                      <v-btn 
                      v-bind="props"
                      > 
                        <span class="mr-2">{{sItem.text}}</span>
                      </v-btn>
                  </nuxt-link>  
                </v-list-item>
              </template>
              
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
  </div>
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
