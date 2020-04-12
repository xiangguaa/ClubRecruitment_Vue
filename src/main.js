import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'
import timeline from "./components/Timeline.vue"   //引入组件
import ApplicationChart from "./components/ApplicationChart.vue"   //引入组件

Vue.component("timeline",timeline);
Vue.component("ap-chart",ApplicationChart);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


const setHtmlFontSize = () => {
  const htmlDom = document.getElementsByTagName('html')[0];
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  if (htmlWidth >= 750) {
    htmlWidth = 750;
  }
  if (htmlWidth <= 320) {
    htmlWidth = 320;
  }
  htmlDom.style.fontSize = `${htmlWidth / 75}px`;
};
window.onresize = setHtmlFontSize;
setHtmlFontSize();