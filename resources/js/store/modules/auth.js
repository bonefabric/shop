export default {
    namespaced: true,
    state: {
        errors: {},
        user: {},
        authorized: false,
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
        }
    }
}
