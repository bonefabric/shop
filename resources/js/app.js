import {registerLayouts} from "./helpers/layouts";

require('./bootstrap');

import {createApp} from "vue";
import Root from "./components/Root";
import store from "./store";
import router from "./router";

const app = createApp(Root)
    .use(store)
    .use(router);

registerLayouts(app);

app.mount('#app');
