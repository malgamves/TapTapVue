import Vue from 'vue'
import PubNubVue from 'pubnub-vue';
import store from './store';
import App from './App.vue'
import Dzina from 'dzina'

Vue.config.productionTip = false


const myUsername = Dzina.generate();
const me = {
  userName: myUsername,
};


Vue.use(PubNubVue, { 
  publishKey: '', 
  subscribeKey: '',
  ssl: true
}, store);


function created(){
  this.$store.commit('setMe', {me});
}



new Vue({
  render: h => h(App),
  created,
  store,
}).$mount('#app')
