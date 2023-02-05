<template>
    <v-bottom-navigation dark grow hide-on-scroll
    v-model="value"
    :background-color="color"
  >
    <v-btn>      
      <v-icon>mdi-church</v-icon>
      <span>Home</span>
    </v-btn>

    <v-btn>
      <v-icon>mdi-note</v-icon>
      <span>Notes</span>
    </v-btn>

    <v-btn>      
      <v-icon>mdi-book</v-icon>
      <span>Books</span>
    </v-btn>

  </v-bottom-navigation>
</template>



<script>
    export default {
      data: () => ({ value: 0 }),
  
      computed: {
        color () {
          switch (this.value) {
            case 0: return 'blue-grey'
            case 1: return 'teal'
            case 2: return 'brown'
            default: return 'blue-grey'
          }
        },
      },
    }
  </script>