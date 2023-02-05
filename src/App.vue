<template>
  <v-app>
    <!--Navigation bar-->
    <Navbar />
    <BottomNav />
    <v-main>
      
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import HomeView from './views/HomeView.vue'
import BottomNav from '@/components/BottomNav'

export default {
  name: 'App',
  components: { Navbar, HomeView, BottomNav },

  data() {
    return {

    }
  }
}
</script>