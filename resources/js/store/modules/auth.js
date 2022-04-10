export default {
    namespaced: true,
    state: {
        errors: {},
        user: {},
        authorized: false,
    },
    getters: {
        isAdmin(state) {
            return state.authorized && state.user && state.user.isAdmin;
        }
    },
    mutations: {
        clearErrors(state) {
            state.errors = {};
        }
    },
    actions: {
        async register(context, payload) {
            context.commit('clearErrors');
            try {
                const response = await axios.post(apiPath('/register'), payload);
                context.state.user = response.data;
                context.state.authorized = true;
            } catch (e) {
                if (e.response && e.response.data && e.response.data.errors) {
                    context.state.errors = e.response.data.errors;
                }
            }
        },

        async login(context, payload) {
            context.commit('clearErrors');
            try {
                const response = await axios.post(apiPath('/login'), payload);
                context.state.user = response.data;
                context.state.authorized = true;
            } catch (e) {
                if (e.response && e.response.data && e.response.data.errors) {
                    context.state.errors = e.response.data.errors;
                }
            }
        },

        async loadUser(context) {
            try {
                const response = await axios.get(apiPath('/user'));
                context.state.user = response.data;
                context.state.authorized = true;
            } catch (e) {
            }
        },

        async logout(context) {
            try {
                await axios.post(apiPath('/logout'));
                context.state.user = {};
                context.state.authorized = false;
            } catch (e) {
            }
        }
    }
}
