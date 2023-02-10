<template>
    <nav>
        <v-toolbar app class="bg-grey-lighten-5">
            <v-toolbar-title>
                <span class="font-weight-bold text-indigo-accent-4">CB</span>
                <span class="font-weight-light text-blue">Lite</span>
            </v-toolbar-title>
            <!--Icon Buttons-->
            <v-btn icon @click = "bellNotification()">
                <v-icon class="text-blue">mdi-bell</v-icon>
            </v-btn>            
        </v-toolbar>
        <!--Popup-->
        <v-card flat
        max-width = "250"
        class = "mx-auto "
        color = "#fafafa"
        v-if="popup"
        >
        <v-card-title>
            <v-row class = "pa-3">
                <span class = "mr-2">Support</span>
                <span class="font-weight-regular">CB</span>
                <span class="font-weight-light mr-2">Lite</span>
                <v-icon color = "teal">mdi-heart</v-icon>
            </v-row>
        </v-card-title>

        <v-spacer></v-spacer>

        <v-card-text>
            Make a cash or gift donation to give hope to the less fortunate in our society.
        </v-card-text>             
    </v-card>
    </nav>
</template>



<script>

  export default {
    name: 'Navbar',

    data() {
        return {
            popup: false,
        }
    },
    methods: {
        bellNotification() {
            this.popup = !this.popup;
        }
    }
  }
</script>