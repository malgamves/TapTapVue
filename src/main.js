import Vue from 'vue'
import PubNubVue from 'pubnub-vue';
import store from './store';
import App from './App.vue'

Vue.config.productionTip = false


const myUuid = fourCharID();
const me = {
  uuid: myUuid,
};
/*try{
  if(!publish_Key || !subscribe_Key){
    throw 'PubNub Keys are missing.';
  }
}
catch(err){
  console.log(err);
}

*/

Vue.use(PubNubVue, { 
  publishKey: 'pub-c-eee557eb-b862-47a2-b056-43abe674f066', 
  subscribeKey: 'sub-c-d87c44d8-c8f7-11e9-93da-dae13b67b174',
  ssl: true
}, store);


function created(){
  this.$store.commit('setMe', {me});
}

/*
 *
 * Get a new 4 character ID. It is recommended to use a standard 128-bit UUID
 *     in production apps instead.
 *
 * @return {string} A unique ID for each user.  */


 // You need to change this function so you create a cute adjective plus animal middle name
 
function fourCharID() {
  const maxLength = 4;
  const possible = 'abcdef0123456789';
  let text = '';

  for (let i = 0; i < maxLength; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}


new Vue({
  render: h => h(App),
  created,
  store,
}).$mount('#app')
