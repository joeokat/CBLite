<template>
    <v-card>        
      <v-container fluid>
        <v-row>
          <v-card color="#385F73" dark>
            <v-card-title class="text-h5">
              Unlimited music now
            </v-card-title>
            <v-card-text>
            text goes here
            </v-card-text>
          </v-card>

          <v-col v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
          >
            <v-card>
              <v-icon></v-icon>
              <v-card-title v-text="card.title"></v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
</template>

<script>


</script>