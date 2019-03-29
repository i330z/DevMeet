import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import {store} from './store/index'
// import { create } from 'domain';
// import { createDecipher } from 'crypto';
import * as firebase from 'firebase';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),

  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyAob5r7Ci5pIklGIVst4op4QEjjxEYoWlk",
      authDomain: "devmeet-67755.firebaseapp.com",
      databaseURL: "https://devmeet-67755.firebaseio.com",
      projectId: "devmeet-67755",
      storageBucket: "devmeet-67755.appspot.com",
    })
  }
}).$mount('#app')
