<template>
    <nav>
        <v-toolbar color = "#fafafa" app>
            <v-toolbar-title>
                <span>CB</span>
                <span class="font-weight-light">Lite</span>
            </v-toolbar-title>
            <!--Icon Buttons-->
            <v-btn icon color="#fafafa"
            @click = "bell = !bell"
            >
                <v-icon color="info">mdi-bell</v-icon>
            </v-btn>            
        </v-toolbar>
        <!--Floating Notification-->
        <v-card flat
        v-model = bell
        max-width = "400"
        class = "mx-auto"
        color = "#fafafa"
        >
            <v-card-title>
                <v-row class = "pa-3">
                    <span class = "mx-2">Support CB Lite</span>
                    <v-icon color = "success">mdi-party-popper</v-icon>
                </v-row>
            </v-card-title>

            <v-divider></v-divider>

            <v-card-text>
                Make a cash or gift donation to give hope to the less fortunate in our society.
            </v-card-text>             
        </v-card>
    </nav>
</template>



<script>
  export default {
    data: () => ({
      bell: false,
    }),
  }
</script>