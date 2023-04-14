<template>
  <div class="ma-4">
    <v-card
      flat
      max-width="448"
      rounded="lg"
      color="teal text-white"
      class="mx-auto pa-2"
    >
      <v-card-item
        >Thank you for taking time off your busy schedule to share your
        feedback. consider sharing an idea to improve the user experience of the
        application.</v-card-item
      >
    </v-card>
  </div>

  <v-card class="mx-auto pa-6 pb-6" max-width="448" rounded="lg" flat>
    <div class="text-subtitle-1 text-bold-emphasis mb-2">
      Tell us about your idea
    </div>
    <div class="d-flex justify-space-between text-center">
      <v-chip
        class="mx-auto ma-2"
        max-width="448"
        color="light-blue-darken-4"
        text-color="white"
      >
        Eg: Store
      </v-chip>
      <v-chip
        class="mx-auto ma-2"
        max-width="448"
        color="light-blue-darken-4"
        text-color="white"
      >
        Events
      </v-chip>
      <v-chip
        class="mx-auto ma-2"
        max-width="448"
        color="indigo"
        text-color="white"
      >
        Books </v-chip
      ><v-chip
        class="mx-auto ma-2"
        max-width="448"
        color="indigo"
        text-color="white"
      >
        Forum
      </v-chip>
      <v-chip
        class="mx-auto ma-2"
        max-width="448"
        color="light-blue-darken-4"
        text-color="white"
      >
        Notifications
      </v-chip>
    </div>
    <v-textarea
      density="compact"
      placeholder="Is your idea a new feature or change to a current one? Explain how it will improve your experience."
      variant="outlined"
      clearable
    ></v-textarea>

    <v-btn
      flat
      rounded
      append-icon="mdi-send"
      variant="tonal"
      size="large"
      color="blue"
    >
      Submit
    </v-btn>
  </v-card>
</template>
