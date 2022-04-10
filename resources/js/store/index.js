import {createStore} from "vuex";
import system from "./modules/system";
import auth from "./modules/auth";
import goods from "./modules/goods";

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        system,
        auth,
        goods,
    },
});
