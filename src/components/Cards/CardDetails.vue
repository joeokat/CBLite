<template>
  <v-container>
    <div class="books">
      <h1>This is the Card Detail View</h1>
      <h3>The Job ID is {{ $route.params.id }}</h3>
    </div>
  </v-container>
</template>

<script>
export default {
  props: ["id"],
};
</script>
