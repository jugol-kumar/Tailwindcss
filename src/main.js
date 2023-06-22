import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';
import VueFeather from 'vue-feather';


//intlTelInput
import 'intl-tel-input/build/css/intlTelInput.css';
import 'intl-tel-input/build/js/intlTelInput.js';



createApp(App)
.use(createPinia())
.use(router)
.component(VueFeather.name, VueFeather)
.component('QuillEditor', QuillEditor)
.mount('#app')
