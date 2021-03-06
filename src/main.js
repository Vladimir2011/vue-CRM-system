import Vue from 'vue'
import Vuelidate from 'vuelidate/src'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import messagePlugin from './utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

const config = {
  apiKey: "AIzaSyCyzV2zAzLt3RywNtkDvBvY0QDkeHbExgs",
  authDomain: "vue-crm-system-c57a6.firebaseapp.com",
  databaseURL: "https://vue-crm-system-c57a6-default-rtdb.firebaseio.com",
  projectId: "vue-crm-system-c57a6",
  storageBucket: "vue-crm-system-c57a6.appspot.com",
  messagingSenderId: "56146329068",
  appId: "1:56146329068:web:17fcf1328dbfca274f14c9",
  measurementId: "G-7W6JMYQ05C"
}

let app

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


