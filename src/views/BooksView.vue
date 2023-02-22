<template>
  <v-container>
    <v-row>
      <v-col cols="6" md="3"
      v-for="book in books" 
      :key="book.title"
      >
        <v-card 
        class="mx-auto"
        rounded="lg"
        >
          <v-img :src="book.image" />
          
          <v-row class="mx-auto mt-1" align="center">
            <v-card-title> {{ book.title }} </v-card-title>
            <v-spacer></v-spacer>
            <span class="mr-3"> {{ book.cost }} </span>
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
        { title: 'Booth', cost: '$2.99', image: '/book1.jpg', rating: '4.5 (413)' },
        { title: 'Sin Eater', cost: '$3.99', image: '/book2.jpg', rating: '4.0 (13)' },
        { title: 'Dune', cost: '$4.99', image: '/book3.jpg', rating: '4.9 (913)' },
        { title: 'Normal People', cost: '$2.99', image: '/book4.jpg', rating: '4.5 (413)' },
        { title: 'The Swallows', cost: '$3.99', image: '/book5.jpg', rating: '4.0 (13)' },
        { title: 'Olga Dies', cost: '$3.99', image: '/book6.jpg', rating: '4.0 (13)' }
      ],
    }),

  }
</script>