<template>
  <div id="app">
    <GameWindow/>
  </div>
</template>

<script>
import GameWindow from './components/GameWindow.vue'

export default {
  name: 'app',
  components: {
    GameWindow
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
