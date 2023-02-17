<template>
    <v-bottom-navigation 
    flat
    shift
    grow
    v-model="value"
    :color="color"
    class="bg-grey-lighten-5"
  >
    <v-btn v-for="link in links" :key="link.text" router :to="link.route">      
      <v-icon>{{ link.icon }}</v-icon>
      <span>{{ link.text }}</span>
    </v-btn>
  </v-bottom-navigation>
</template>



<script>
    export default {
      data() {
        return {
          value: 0,

          links: [
            { icon: 'mdi-home', text: 'Home', route: '/' },
            { icon: 'mdi-book', text: 'Books', route: '/books' },
            { icon: 'mdi-cloud', text: 'Suggest', route: '/suggest' }
          ]
        }
      },
  
      computed: {
        color () {
          switch (this.value) {
            case 0: return 'light-blue-darken-4'
            case 1: return 'brown-darken-4'
            case 2: return 'light-green-darken-4'
            default: return 'light-blue-darken-4'
          }
        },
      },
    }
  </script>