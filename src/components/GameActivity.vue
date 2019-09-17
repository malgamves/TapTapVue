<template>
  <div>
      <div id="div1" 
                v-if="!(secs==0)">
          <button type="submit" @click="updateCount()" id="clickButton">
          </button>
        </div>
        <div class="status" v-else>
            <h2>Game Over</h2>
            <h2> {{Winner}} has the quickest fingers </h2>
        </div>

        <!-- Second status  -->
        <div id="status"></div>
        <h1> You clicked <b>{{ numClicks }}</b> times</h1>
        <h2> You have <b>{{ secs }}</b> secs left </h2>
  </div>
</template>

<script>

export default {
    name:'GameActivity',
    data() {
        return { 
        loaded: false,
        active:false,
        winner:'',
        numClicks: 0,
        secs: 10,
        colors:['#9bcd77','#d777b0','#fed401','#ff2c3c', '#66c652'],
        }
    },
    mounted(){
        var self = this;
        this.$pnSubscribe({
          channels: ['score']
        });
        setInterval(function(){
            if(self.active){
                self.secs--;
                if(self.secs == 0){
                    self.active = false;
                }
            }
        },1000);
    },

    methods: {
        updateCount: function () {
            this.loaded = true;
            this.numClicks += 1;
            if(this.active == false){
                this.secs = 10;
                this.numClicks = 0;
                this.active = true;
            }
            this.$pnPublish({
          channel: 'score',
          message: this.numClicks
        });

           /* if (this.numClicks % 10 == 0) {
                ("button").animate({ width: '-=15px', height: '-=15px' }, 500, 'easeOutElastic', function () { })
            }

            var color = this.colors[ Math.round( Math.random()*(this.colors.length-1) ) ];
            ("button").css({backgroundColor:color}) ; */

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