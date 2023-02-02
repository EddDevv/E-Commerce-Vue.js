import { createApp } from 'vue'
import { useVuelidate } from '@vuelidate/core'

import { getAuth } from '@firebase/auth';
import "firebase/database"
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";


import App from './App.vue'
import router from './router'
import { store } from './store'
import './assets/main.css'


const firebaseConfig = {
  apiKey: "AIzaSyAcKk6wv0jFmn8aBAsbEgRtCDlCvWgjzTo",
  authDomain: "online-store-vue-d25da.firebaseapp.com",
  projectId: "online-store-vue-d25da",
  databaseURL: "https://online-store-vue-d25da-default-rtdb.firebaseio.com/",
  storageBucket: "online-store-vue-d25da.appspot.com",
  messagingSenderId: "53474037381",
  appId: "1:53474037381:web:1633e970e33f4c6a08a3ec"
};

let app

const firebase = initializeApp(firebaseConfig)
export const database = getDatabase(firebase);

getAuth().onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
    app.use(router)
    app.use(store)
    app.use(useVuelidate())
    app.mount('#app')
  }
})
