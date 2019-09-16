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
import {mapGetters} from 'vuex';
import GameInfo from './GameInfo.vue';
import GameActivity from './GameActivity.vue';
import ScoreKeeper from './ScoreKeeper.vue';
import Modal from './Modal.vue';

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
    
    computed: {
      ...mapGetters({
     uuid: 'getMyUuid',
      }),
    },

    mounted(){
        var self = this;
        //this.$pnSubscribe({ channels: [this.players.one.name, this.players.two.name], withPresence: true });
        this.$pnSubscribe({
          channels: ['vueGame']
        });
        setInterval(function(){
            if(self.active){
                self.secs--;
                if(self.secs == 0){
                    self.active = false;
                }
            }
        },1000);

        showModal();
    },

    methods: {
        updateCount: function () {
            this.loaded = true;
            this.players.one.score += 1;
            this.$pnPublish({ channel: this.players.two.name, message: this.players.one.score }, (status, response) => console.log(status, response));    
            if(this.active == false){
                this.secs = 10;
                this.numClicks = 0;
                this.active = true;
            }

        },
        closeModal() {
        this.isModalVisible = false;
      },
      showModal() {
        this.isModalVisible = true;
      }
    } 

} 
</script>

<style>
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

button {
  position: relative;
  top: 100px;
  border: none;
  color: #fff;
  width: 200px;
  height: 200px;
  transition: 0.3s;
  border-radius: 50%;
  background-color: #f2ca27;
}
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

