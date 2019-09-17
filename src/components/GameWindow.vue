<template>
  <div>
  <link href='https://fonts.googleapis.com/css?family=Dosis:400,300,600' rel='stylesheet' type='text/css'>
    <score-keeper/>
    <game-activity/>
    <game-info/>
    <modal
      v-show="isModalVisible"
      @close="closeModal"
    />
  </div>   
</template>

<script>
//import {mapGetters} from 'vuex';
import GameInfo from './GameInfo.vue';
import GameActivity from './GameActivity.vue';
import ScoreKeeper from './ScoreKeeper.vue';
import Modal from './Modal.vue';

//let roomID = "hello";
//let gameChannel = "taptap" + roomID;
//console.log(gameChannel)

export default {
    name:'GameWindow',
    components:{
        GameInfo,
        GameActivity,
        ScoreKeeper,
        Modal
    },
    data() {
        return { 
        isModalVisible: true
        }
    },
    mounted() {
      this.$pnSubscribe({
        channels: ["game"]
      });
    },
    methods: {
        closeModal() {
        this.isModalVisible = false;
      },
        showModal() {
        this.isModalVisible = true;
      }
    } 

} 
</script>

<style scoped>
body {
  background-color: #323133;
  color: #fff;
  text-align: center;
  font-family: 'Dosis', sans-serif; background-image:url('http://imgh.us/bg_12.svg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  background-attachment: fixed;
  min-height: 600px;
}

table {
    text-align: center;
}

y
button:active {
  width: 190px;
  height: 190px;
}
button:focus {
  outline: none;
}
#status {
  background: transparent;
  position: relative;
  top: 60px;
}
#status h2 {
  font-size: 60px;
  text-transform: uppercase;
}
#timer {
  text-align: center;
  margin-top: 140px;
}

#app {
  margin: 0 auto;
}
#app h1 {
  color: cadetblue;
  margin-top: 140px;
  font-weight: 300;
}
.over {
  background-color: transparent;
  display: none;
}


</style>

