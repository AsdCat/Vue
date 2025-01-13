import { createApp } from 'vue'
import App from './App.vue'

import Header from './components/header/Header.vue';
import loader from './components/utils/loader.vue';

const app =  createApp(App);

app.component('app-header',Header);
app.component('app-loader',loader)
app.mount('#app')
