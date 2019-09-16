<template>
  <section id="app">
           <h1>{{}} | {{}}</h1>
   <div v-if="loaded">
        <h2>{{}} | {{}}</h2>
   </div>
  </section> 
</template>

<script>

export default {
    name:'ScoreKeeper',
    data() {
        return { 
            
        }
        
    }
}
</script>

<style scoped>

</style>