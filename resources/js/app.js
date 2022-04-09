require('./bootstrap');

import {createApp} from "vue";
import Root from "./components/Root";
import store from "./store";

createApp(Root)
    .use(store)
    .mount('#app');
