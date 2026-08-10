import { createApp } from 'vue'

import { defineCustomElements } from 'ensemble-ui/loader';

import 'ensemble-ui/styles.css';
import './style.css'
import App from './App.vue'

defineCustomElements();

createApp(App).mount('#app')
