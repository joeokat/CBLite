<template>
    <v-bottom-navigation 
    flat
    shift
    grow
    v-model="value"
    :color="color"
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
            case 0: return 'teal'
            case 1: return 'error'
            case 2: return 'brown'
            default: return 'blue-grey'
          }
        },
      },
    }
  </script>