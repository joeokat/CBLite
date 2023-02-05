<template>
    <v-card>        
      <v-container fluid>
        <v-row>          
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