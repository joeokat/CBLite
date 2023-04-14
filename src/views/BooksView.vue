<template>
  <v-container>
    <v-row>
      <v-col cols="6" md="3" v-for="book in books" :key="book.title">
        <v-card @click="redirectToPayment" class="mx-auto" rounded="lg">
          <v-img :src="book.image" />

          <v-row class="mx-auto mt-1" align="center">
            <v-card-title class="book--title"> {{ book.title }} </v-card-title>
            <v-spacer></v-spacer>
            <span class="mr-3"> ¢{{ book.cost }} </span>
          </v-row>

          <v-row class="mx-auto my-1" align="center">
            <v-icon class="ml-2" color="amber">mdi-star</v-icon>
            <div class="text-grey mx-2">{{ book.rating }}</div>

            <v-spacer></v-spacer>

            <v-card-actions>
              <v-btn
                size="large"
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
      {
        title: "Booth",
        cost: "25.99",
        image: "/book1.jpg",
        rating: "4.5 (413)",
      },
      {
        title: "Sin Eater",
        cost: "30.99",
        image: "/book2.jpg",
        rating: "4.0 (13)",
      },
      {
        title: "Dune",
        cost: "40.99",
        image: "/book3.jpg",
        rating: "4.9 (913)",
      },
      {
        title: "Normal Peoples",
        cost: "20.99",
        image: "/book4.jpg",
        rating: "4.5 (413)",
      },
      {
        title: "The Swallows",
        cost: "30.99",
        image: "/book5.jpg",
        rating: "4.0 (13)",
      },
      {
        title: "Olga Dies",
        cost: "30.99",
        image: "/book6.jpg",
        rating: "4.0 (13)",
      },
    ],
  }),
  methods: {
    redirectToPayment() {
      const phoneNumber = +2330570270737;
      const message = `Hello there!, I will like to buy one of the books listed on CBlite`;
      window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
        message
      )}`;
    },
  },
};
</script>

<style scoped>
.book--title {
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
