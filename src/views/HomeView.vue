<template>
<div class="ma-4">
  <v-alert color="teal">
    ...“Let your light so shine before men, that 
    they may see your good works, and glorify 
    your Father which is in heaven.” ~ Matthew 5: 16.
  </v-alert> 
</div>   

<v-container>
      
  <v-row>
    <v-col cols="6"
    v-for="card in cards" :key="card.title" router :to="card.route">    
    <v-card class="pa-6 card-outline"> 
      <v-img 
        :src="card.icon" 
        aspect-ratio="4">
      </v-img>  
      <v-card-title
        class="text-center"
        :style="{ color:card.color }"
        > 
        {{ card.title }}
      </v-card-title>
    </v-card>
    </v-col>
  </v-row>
   
</v-container>  
</template>



<script>
export default {
name: 'HomeView',

  data() {
    return {
      heading: 'Categories',
      cards: [
        { title: 'Almanac', color: '#2CB5B4', icon: require('@/assets/almanac.svg'), route: '/almanac' },
        { title: 'Creed', color: '#474BA5', icon: require('@/assets/creed.svg'), route: '/creed' },
        { title: 'Live', color: '#FF4C4C', icon: require('@/assets/live.svg') },
        { title: 'Study', color: '#62D788', icon: require('@/assets/study.svg') },
        { title: 'Events', color: '#044D80', icon: require('@/assets/events.svg'), route: '/events' },
        { title: 'Sponsor', color: '#F5A623', icon: require('@/assets/support.svg'), route: '/support' },
      ],
    }
   
  }
}
</script>



<style>
  .card-outline {
    border-radius: 16px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  }
</style>