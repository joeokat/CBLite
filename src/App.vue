<template>
  <v-app>
    <!--Navigation bar-->
    <Navbar />
    <BottomNav />
    
    <!--Main-->
    <router-view/>
    
  </v-app>
</template>

<script>
import HomeView from './views/HomeView.vue'
import Navbar from '@/components/Navbar.vue'
import BottomNav from '@/components/BottomNav.vue'

export default {
  name: 'App',
  components: { HomeView, Navbar, BottomNav,  },

  data() {
    return {
      heading: 'This is the home page'
    }
  }
}
</script>