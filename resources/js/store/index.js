import {createStore} from "vuex";
import system from "./modules/system";
import auth from "./modules/auth";

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        system,
        auth,
    },
});
