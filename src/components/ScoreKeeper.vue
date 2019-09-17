<template>
  <section id="app">
           <h1>{{ names }} | {{ names }}</h1>
   <div v-if="loaded">
        <h2>{{score }} | {{names}} </h2>
   </div>
  </section> 
</template>

<script>
export default {
    name:'ScoreKeeper',
    data() {
        return { 
            score: this.$pnGetMessage('score'),
            names: this.$pnGetMessage('lobby'),
            loaded: true,
        }
        
    },
    mounted() {
      this.$pnSubscribe({
        channels: ["game","lobby"]
      });
    },
}
</script>

<style scoped>

</style>