<template>
  <div class="bottom-navigation-wrapper">
    <v-layout class="overflow-visible" style="height: 56px">
      <v-bottom-navigation v-model="value" :bg-color="color" mode="shift">
        <v-btn @click="goTo('home')">
          <v-icon>mdi-home</v-icon>

          <span>Home</span>
        </v-btn>

        <v-btn @click="goTo('books')">
          <v-icon>mdi-book</v-icon>

          <span>Books</span>
        </v-btn>

        <v-btn @click="goTo('feedbacks')">
          <v-icon>mdi-comment-quote</v-icon>

          <span>Feedbacks</span>
        </v-btn>
      </v-bottom-navigation>
    </v-layout>
  </div>
</template>

<script>
export default {
  data: () => ({ value: 0 }),
  methods: {
    goTo(route) {
      this.$router.push({ name: route });
    },
  },
  computed: {
    color() {
      switch (this.value) {
        case 0:
          return "teal";
        case 1:
          return "brown";
        case 2:
          return "light-blue-darken-4";
      }
    },
  },
};
</script>

<style>
.bottom-navigation-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}
</style>
