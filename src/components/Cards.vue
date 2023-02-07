<template>
 <v-container>
  <v-row dense>
    <v-col
      v-for="card in cards"
      :key="card.title"
      cols="6"
    >
      <v-card 
      height: 147px
      width: 159px
      border-radius: 16px
      >
        <v-card-title>{{ card.title }}</v-card-title>
        <v-icon>{{ card.icon }}</v-icon>
      </v-card>
    </v-col>
  </v-row>
 </v-container>
</template>

<script>
export default {
  name: 'Cards',


  data() {
    return {
      cards: [
        { title: 'Almanac', icon: './assets/almanac.svg' },
        { title: 'Creed', icon: './assets/creed.svg' },
        { title: 'Live', icon: './assets/live.svg' },
        { title: 'Study', icon: './assets/study.svg' },
        { title: 'Events', icon: './assets/event.svg' },
        { title: 'Study', icon: './assets/study.svg' },
      ]
    }

  }
}
</script>