import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTemperatureHigh } from '@fortawesome/free-solid-svg-icons';
library.add(faTemperatureHigh);

createApp(App)
	.component('fa-icon', FontAwesomeIcon)
	.mount('#app')
