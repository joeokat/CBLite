<template>    
        <div>
          <v-alert v-model="alert"         
            closable
            close-label="Close Alert"
            color="blue"      
          >
          ...“Let your light so shine before men, that 
          they may see your good works, and glorify 
          your Father which is in heaven.” <br> Matthew 5: 16.
          </v-alert>
        </div>

        
</template>



<script>
  export default {
    data: () => ({
      alert: true,
    }),
  }
</script>
