<template>
  <v-container>
    <v-row>
      <v-col cols="6"
      v-for="book in books" 
      :key="book.title"
      >
        <v-card 
        class="mx-auto"
        >
          <v-img :src="book.image" />
          
          <v-row class="mx-auto mt-1" align="center">
            <v-card-title> {{ book.title }} </v-card-title>
            <span> {{ book.cost }} </span>
          </v-row>

          <v-row class="mx-auto my-1" align="center">
            <v-icon class="ml-2" color="amber">mdi-star</v-icon>
            <div class="text-grey mx-2"> {{ book.rating }} </div>

            <v-spacer></v-spacer>

            <v-card-actions>
              <v-btn size="large"
                color="blue"
                variant="tonal"
                rounded
                class="my-2"
              >
                Buy
              </v-btn>
            </v-card-actions>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  


<script>
  export default {
    data: () => ({
      books: [
        { title: 'The Beaver', cost: '$2.99', image: '/book1.jpg', rating: '4.5 (413)' },
        { title: 'Cash app', cost: '$3.99', image: '/book2.jpg', rating: '4.0 (13)' },
        { title: 'The Gaiden', cost: '$4.99', image: '/book2.jpg', rating: '4.9 (913)' }
      ]
    }),

  }
</script>