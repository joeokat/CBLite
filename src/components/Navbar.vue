<template>
    <nav>
        <v-toolbar app class="bg-grey-lighten-5">
            <v-toolbar-title>
                <span class="font-weight-bold text-indigo-accent-4">CB</span>
                <span class="font-weight-light text-blue">Lite</span>
            </v-toolbar-title>
        <!--Notification-->
        <v-btn rounded>
            <v-icon class="text-blue">mdi-bell</v-icon>
            <!-- <span class="font-weight-medium ml-2 text-blue">Notice</span> -->
            <v-menu activator="parent">
                <v-list>
                <v-list-item
                    v-for="notice in notifications"
                    :key="notice.title"
                >
                    <v-list-item-title pa-3>{{ notice.title }}</v-list-item-title>
                    <v-list-item-subtitle> {{ notice.message }} </v-list-item-subtitle> 
                </v-list-item>
                
                </v-list>
            </v-menu>
        </v-btn>
        </v-toolbar>
    </nav>
</template>



<script>

  export default {
    name: 'Navbar',

    data: () => ({
        notifications: [
        { title: 'Notice', message: 'Consider donating to CBLite to support the work of God digitally', }
      ],
    }),
  }
</script>