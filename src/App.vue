<template>
  <v-app>
    <!--Navigation bar-->
    <Navbar />

    <v-main>
      
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import HomeView from './views/HomeView.vue';

export default {
  name: 'App',
  components: { Navbar, HomeView },

  data() {
    return {

    }
  }
}
</script>