<template>
    <v-app-bar app color='#023342' height="100">
       <v-app-bar-nav-icon @click="drawer = true" 
        class="d-flex d-sm-none" 
        ></v-app-bar-nav-icon>
        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0NTYuMzggMjA2LjkzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTYuMzggMjA2LjkzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMTkuNzUsNTUuNjZoLTE2LjgzdjYuNThoNy42NmgzLjI2aDQuODhjMy4wMiwwLDUuMjksMiw1LjI5LDQuOTZjMCwzLjAyLTIuMjcsNC45Ni01LjI5LDQuOTZoLTQuODhoLTMuMjYKCQkJCWgtNy42NnYxOS40OGg3LjY2di0xMi45aDkuMTdjNy43NywwLDEyLjA5LTUuMjMsMTIuMDktMTEuNDlDMTMxLjg0LDYwLjk1LDEyNy41Nyw1NS42NiwxMTkuNzUsNTUuNjZ6Ii8+CgkJPC9nPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xODUuNDEsNTUuNjZoNy42NnYzNS45OWgtNy42NlY1NS42NnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjAzLjQ0LDU1LjY2aDguNzRsOS45OCwyNy42OGw5LjkzLTI3LjY4aDguNzRsLTEzLjg3LDM1Ljk5aC05LjZMMjAzLjQ0LDU1LjY2eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNzEuNjQsODUuNDRoLTE2LjA4bC0yLjI3LDYuMjFoLTguNDJsMTMuOTItMzUuOTloOS42bDEzLjg3LDM1Ljk5aC04LjM2TDI3MS42NCw4NS40NHogTTI1Ny42MSw3OC44MWgxMS45MgoJCQlMMjYzLjYsNjIuM0wyNTcuNjEsNzguODF6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI5Ny41NCw2Mi40aC0xMC41MnYtNi43NGgyOC43MXY2Ljc0aC0xMC40N3YyOS4yNGgtNy43MlY2Mi40eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMjcuNyw1NS42NmgyNS40N3Y2LjU4aC0xNy44MXY3LjgyaDE3LjQzdjYuNThoLTE3LjQzdjguMzZoMTcuODF2Ni42NEgzMjcuN1Y1NS42NnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTAyLjQsMTA5LjY4aDcuNjZ2MjkuMjRoMTUuMjJ2Ni43NEgxMDIuNFYxMDkuNjh6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEzOS4yMywxMDkuNjhIMTQ3djIxLjM3YzAsNS4wMiwyLjc1LDguNDcsOC4zNiw4LjQ3YzUuNSwwLDguMjYtMy40NSw4LjI2LTguNDd2LTIxLjM3aDcuNzd2MjEuNTgKCQkJYzAsOC45Ni01LjEzLDE1LjA1LTE2LjAzLDE1LjA1Yy0xMS4wMSwwLTE2LjEzLTYuMTUtMTYuMTMtMTVWMTA5LjY4eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMDIuODcsMTMyLjVsLTkuMDYsMTMuMTdoLTkuMTJsMTMuMDYtMTguNDVsLTEyLjI1LTE3LjU0aDkuMTJsOC4yNiwxMi4zbDguMTUtMTIuM2g5LjIzTDIwOCwxMjcuMTYKCQkJbDEzLjA2LDE4LjUxaC05LjE3TDIwMi44NywxMzIuNXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjMyLjcxLDEwOS42OGg3Ljc3djIxLjM3YzAsNS4wMiwyLjc1LDguNDcsOC4zNiw4LjQ3YzUuNSwwLDguMjYtMy40NSw4LjI2LTguNDd2LTIxLjM3aDcuNzd2MjEuNTgKCQkJYzAsOC45Ni01LjEzLDE1LjA1LTE2LjAzLDE1LjA1Yy0xMS4wMSwwLTE2LjEzLTYuMTUtMTYuMTMtMTVWMTA5LjY4eiIvPgoJCTxnPgoJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzAxLjI5LDEzMS45NmMzLjg4LTAuOTIsNy44OC00LjMyLDcuODgtMTAuNjhjMC02LjY5LTQuNTktMTEuNi0xMi4wOS0xMS42aC0xNi44M3Y2LjU4aDcuNjZoMC43OGg3LjI2CgkJCQljMy4wOCwwLDUuNCwxLjk0LDUuNCw0Ljk2YzAsMy4wMi0yLjMyLDQuOTYtNS40LDQuOTZoLTcuMjZoLTAuNzhoLTcuNjZ2MTkuNDhoNy42NnYtMTIuOWg1LjYxbDcuMDcsMTIuOWg4Ljc5TDMwMS4yOSwxMzEuOTZ6Ii8+CgkJPC9nPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNjQuNyw3Ny45NGMzLjg4LTAuOTIsNy44OC00LjMyLDcuODgtMTAuNjhjMC02LjY5LTQuNTktMTEuNi0xMi4wOS0xMS42aC0xNi44M3Y2LjU4aDcuNjZoMC43OGg3LjI2CgkJCWMzLjA4LDAsNS40LDEuOTQsNS40LDQuOTZjMCwzLjAyLTIuMzIsNC45Ni01LjQsNC45NmgtNy4yNmgtMC43OGgtNy42NnYxOS40OGg3LjY2di0xMi45aDUuNjFsNy4wNywxMi45aDguNzlMMTY0LjcsNzcuOTR6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTMzMi4yNiwxMzAuOTRsLTEzLjg3LTIxLjI2aDguNzRsOC45NiwxNC40Nmw4Ljg1LTE0LjQ2aDguNzRsLTEzLjc2LDIxLjI2djE0LjczaC03LjY2VjEzMC45NHoiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K" alt="Private Luxury Forums" width="180">
    
        <!-- <v-toolbar-title>Your Dashboard</v-toolbar-title> -->
        <v-spacer></v-spacer>
       
<!--   
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn> -->
        
        <v-btn-group 
        color='#023342'  
            v-model="tab"
            align-with-title
            class="d-none d-sm-flex px-10">
            <v-btn   v-for="item in items" :key="item">
              {{ item }}
            </v-btn>
        </v-btn-group>
  
        <!-- <template v-slot:extension> -->
          <!-- <v-tabs
            v-model="tab"
            align-with-title
            class="d-none d-sm-flex"  
          >
            <v-tabs-slider color="yellow"></v-tabs-slider>
            
            <v-tab
              v-for="item in items"
              :key="item"
            >
              {{ item }}
            </v-tab>
          </v-tabs> -->
        <!-- </template> -->
    </v-app-bar>
    <!-- Add a navigation bar -->
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
        >
          <v-list-item v-for="(item, index) in items">
            <v-list-item-title @click="tab = index">{{ item }}</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- Navigation bar ends -->

   <!-- <v-app-bar color="teal-darken-4" image="https://picsum.photos/1920/1080?random">
          <template v-slot:image>
            <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
          </template>

          <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </template>

          <v-app-bar-title>Nuxt 3 Vuetify 3 Sample</v-app-bar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-app-bar> -->
  </template>
 <script lang="ts">

export default {
    data: () => ({
        drawer: false,
        tab: null,
        items: [
            'web', 'shopping', 'videos', 'images', 'news',
        ],
    }),
}
//  import { useAuth } from "~/composables/useAuth";
//  import { useUserStore } from "~/store/user";
//  export default defineComponent({
//    setup() {
//      const isLoggedIn = computed(useAuth);
//      const loading = ref(false);
 
//      const handleLogout = () => {
//        loading.value = true;
 
//        setTimeout(() => {
//          useUserStore().logout();
//          loading.value = false;
//        }, 2000);
//      };
 
//      return {
//        isLoggedIn,
//        loading,
//        handleLogout,
//      };
//    },
//  });
 </script>
 
 <style scoped>
 header {
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   padding-inline: 1rem;
 }
 .mr-1 {
   margin-right: 4rem;
 }
 </style>