<template>
  <v-container>
  <v-card flat
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-row>
      <v-rating
      :model-value="4.5"
      color="amber"
      density="compact"
      half-increments
      readonly
      size="small"
      ></v-rating>

      <div class="text-grey ms-4">
        4.5 (413)
      </div>
    </v-row>

  <div class="my-4 text-subtitle-1">
    $ 3
  </div>

    <v-card-actions>
      <v-btn size="large"
        color="blue"
        variant="tonal"
        rounded
      >
        Buy
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn @click="show = !show"
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          product descripton
        </v-card-text>
        <v-divider></v-divider>
        <v-card-title>Delivery hours</v-card-title>

        <v-row class="mx-auto" align="center">
          <v-card-subtitle>Monday - Friday</v-card-subtitle>  
          <v-chip 
          class="ma-2"
          color="blue"
          variant="outlined"
          prepend-icon="mdi-clock-time-nine-outline"
          >
            9:00AM - 5:00PM</v-chip>
        </v-row>
      </div>
    </v-expand-transition>
  </v-card>
  </v-container>
</template>
  


<script>
  export default {
    data: () => ({
      show: false,
    }),
  }
</script>