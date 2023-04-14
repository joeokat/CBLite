<template>
  <div class="ma-4">
    <v-card class="mx-auto pa-2" color="teal" rounded="lg" flat>
      <v-card-item
        >...“Let your light so shine before men, that they may see your good
        works, and glorify your Father which is in heaven.” ~ Matthew 5: 16.
      </v-card-item>
    </v-card>
  </div>

  <v-container>
    <Card />
  </v-container>
</template>

<script>
import Card from "@/components/Cards/Card.vue";

export default {
  name: "HomeView",
  components: { Card },

  data() {
    return {};
  },
};
</script>

<Style scoped>


</Style>
