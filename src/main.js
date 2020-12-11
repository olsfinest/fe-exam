import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Aboutus from './Aboutus.vue';
import Home from './App.vue';
import Aboutme from './Aboutme.vue';
import Ourteam from './Ourteam.vue';
import Porfolio from './Porfolio.vue';
import Work from './Work.vue';


Vue.use(VueRouter);

const routes = [
    { path: '/aboutus' , component: Aboutus,  },
    { path: '/aboutme' , component: Aboutme,  },
    { path: '/ourteam' , component: Ourteam,  },
    { path: '/porfolio' , component: Porfolio,  },
    { path: '/work' , component: Work,  },
    { path: '/' , component: Home,  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.config.productionTip = false;


// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
