<template>
  <v-app>
    <!--Splash screen-->
    <v-content class="body" v-if="showSplashScreen">
      <v-row class="fill-height" align="center">
        <v-col class="text-center">
          <div class="logo text-grey-lighten-5">
            <span class="font-weight-medium">CB</span>
            <span class="font-weight-light">Lite</span>
          </div>
          <div class="company font-weight-light text-white">
            <p>from</p>
            <p>Fleet Labs Ghana</p>
          </div>
        </v-col>
      </v-row>
    </v-content>

    <v-content v-else>
      <!--Navigation bar-->
      <Navbar />
      <BottomNav />
      <!--Main-->
      <v-main>
        <router-view/>
      </v-main>    
    </v-content>
  </v-app>
</template>

<script>
import HomeView from './views/HomeView.vue'
import Navbar from '@/components/Navbar.vue'
import BottomNav from '@/components/BottomNav.vue'
import Card from './components/Cards/Card.vue'

export default {
  name: 'App',
  components: { HomeView, Navbar, BottomNav, Card },

  data() {
    return {
      showSplashScreen: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.showSplashScreen = false;
    }, 3000);
  }
}
</script>



<style>
  .body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .fill-height {
    height: 100%;
    margin: 0;
    padding: 0;
    background: linear-gradient(91.13deg, 
    #0067FF 2.03%, #0057FF 95.87%);
    
  }
  .logo {
    font-size: 24px;
  }
  .company {
    font-size: 14px;
  }
</style>
