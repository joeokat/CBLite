<template>
  <v-container>
    <h1> {{ heading }} </h1>
    <v-alert color="blue">
    ...“Let your light so shine before men, that 
    they may see your good works, and glorify 
    your Father which is in heaven.” ~ Matthew 5: 16.
    </v-alert> 

    
  </v-container>
  <Cards title="Cards"/>
  
</template>



<script>
import Cards from '@/components/Cards.vue';

export default {
name: 'HomeView',

  data() {
    return {
      heading: 'Home'
    }

  }
}
</script>