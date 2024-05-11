import { createApp } from 'vue'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import App from './App.vue'
import { router } from './ts/route';

function main() {
  const app = createApp(App);

  app.use(Antd);
  app.use(router);

  app.mount('#app');
}

main();


