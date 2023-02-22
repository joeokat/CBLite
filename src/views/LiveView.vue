<template>
  <v-container>
    <div class="books">
      <h1>This is the LiveView</h1>
    </div>
    <v-row>
      <v-col v-for="card in cards" :key="card.title" 
      cols="6" md="4" lg="3"
      >
        <!-- <router-link :to="{ name: 'cardDetails', params: { id: card.title } }"> -->
          <v-card>
            <v-card-title>{{ card.title }}</v-card-title>
            <v-card-text>{{ card.description }}</v-card-text>
          </v-card>
        <!-- </router-link> -->
      </v-col>
    </v-row>
  </v-container>       
</template>
  


<script>
  export default {
    data() {
      return {
        cards: [
          { id: 1, title: 'Card 1', description: 'This is the first card' },
          { id: 2, title: 'Card 2', description: 'This is the second card' },
          { id: 3, title: 'Card 3', description: 'This is the third card' },
          { id: 4, title: 'Card 4', description: 'This is the fourth card' },
          { id: 5, title: 'Card 5', description: 'This is the fifth card' },
          { id: 6, title: 'Card 6', description: 'This is the sixth card' }
        ]
      }
    }
  }
</script>