<template>
  <v-row>
    <v-col cols="6" md="4" lg="3" v-for="card in cards" :key="card.id">
      <router-link
        :to="{ name: 'CardDetails', params: { id: card.id } }"
        class="text-decoration-none"
      >
        <v-card class="pa-6 card-outline">
          <v-img :src="card.icon" aspect-ratio="4"> </v-img>
          <v-card-title class="text-center" :style="{ color: card.color }">
            {{ card.title }}
          </v-card-title>
        </v-card>
      </router-link>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        id: 1,
        title: "Almanac",
        color: "#2CB5B4",
        icon: require("@/assets/almanac.svg"),
        route: "/almanac",
      },
      {
        id: 2,
        title: "Creed",
        color: "#474BA5",
        icon: require("@/assets/creed.svg"),
        route: "/creed",
      },
      {
        id: 3,
        title: "Live",
        color: "#FF4C4C",
        icon: require("@/assets/live.svg"),
        route: "/live",
      },
      {
        id: 4,
        title: "Study",
        color: "#62D788",
        icon: require("@/assets/study.svg"),
      },
      {
        id: 5,
        title: "Events",
        color: "#044D80",
        icon: require("@/assets/events.svg"),
        route: "/events",
      },
      {
        id: 6,
        title: "Sponsor",
        color: "#F5A623",
        icon: require("@/assets/support.svg"),
        route: "/support",
      },
    ],
  }),
};
</script>

<style>
.card-outline {
  border-radius: 16px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
}
.text-decoration-none {
  text-decoration: none !important;
}
</style>
