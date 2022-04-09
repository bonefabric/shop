export default {
    namespaced: true,

    actions: {
        async getCsrfToken() {
            await axios.get('sanctum/csrf-cookie');
        }
    }
}
