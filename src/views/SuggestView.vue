<template>
  <div class="ma-4">
    <v-card flat
    max-width="448"
    rounded="lg"
    color="teal text-white"
    class="mx-auto pa-2"
    >
      <v-card-item>Thank you for taking time off your 
      busy schedule to make your contribution count, 
      consider making a suggestion to help others have a good user
      experience of our application.</v-card-item>
    </v-card> 
  </div>   
  
  <v-card
      class="mx-auto pa-6 pb-6"
      max-width="448"
      rounded="lg"
      flat
    >

      <div class="text-subtitle-1
      text-medium-emphasis 
      mb-2">Have a suggestion to make?</div>

      <v-textarea
        density="compact"
        placeholder="Write to us"
        variant="outlined"
      ></v-textarea>
    
      <v-btn flat rounded 
      append-icon="mdi-send"
      color="blue"> Send </v-btn>
  </v-card>

</template>
