<template>
  <v-container>
    <v-row
    class="mx-auto"
    align="center"
    max-width="344"
    justify="space-around"
    >
    <v-col>
      <div class="text-overline mb-2">Become a sponsor to CBlite</div>
        <v-row dense align="center">
          <!--Avatar-->
          <v-avatar size="64" class="mr-2">
            <v-img
            src="/dp.jpeg"
            >
            </v-img>
          </v-avatar>
          <!--Profile-->
          <div>
            <div class="text-subtitle-2" align="center">
               {{ name }} 
               <v-icon size="16" color="blue">mdi-shield-check</v-icon>
              </div>
            <div class="text-caption"> 
              <v-icon>mdi-at</v-icon>
              {{ username }} </div>
            <div class="text-caption"> 
              <v-icon>mdi-map-marker</v-icon> 
              {{ location }} 
            </div> 
          </div> 
        </v-row>
      </v-col>
      <!--Support button-->
      <v-btn flat 
      rounded 
      append-icon="mdi-gift"
      class="ma-2" 
      color="blue">
        Donate
      </v-btn>
    </v-row>

    <div class="mt-4"
    v-for="text in texts">
      <p class="text-body-2 mb-3"> {{ text.greeting }} </p>
      <p class="text-body-1">  {{ text.body }} </p>
      <p class="text-body-2 mb-3"> {{ text.gratitude }} </p>
    </div>
    <!--Sponsors-->
    <div class="mt-4">
      <p class="text-h3 mb-3">Sponsors</p>
      <v-divider></v-divider>
      <p class="text-subtitle-2 mb-3 mt-3">Special thanks to generous enterprise sponsors:</p>
      
      <v-avatar size="64" class="mr-4">
        <v-img
        src="/flghana.png"
        >
        </v-img>
      </v-avatar>
        
      <v-btn flat 
      rounded
      class="ma-2" 
      color="blue"
      append-icon="mdi-gift"
      >
        Become a sponsor
      </v-btn>
    </div>
  </v-container>
</template>



<script>
export default {
  data: () => ({
    name: 'JoeOkat',
    username: 'joeokat',
    location: 'Accra',
    texts: [
    { greeting:' Hello there! 👋️' },
    { body: 'I\'m the creator of CB Lite App, a digital non-denominational group on Meta founded with the intention to assemble believers to promote evangelism in our respective domains. ~ 1 Corinthians 9: 19- 23.' },
    { body: 'CB Lite is a project that is developed and mainted by JoeOkat; with support from his entire Fleet Labs Ghana Core Team' },
    { body: 'Sponsor CB Lite to receive some awesome features and updates in time to come.' },
    { gratitude: 'Thank you for using CB Lite! 💚' }
    ]
  })
}
</script>