<template>
    <div class="container mx-auto h-24 flex items-center justify-between">
        <div>
            <router-link :to="{ name: 'index' }">Index</router-link>
        </div>
        <div v-if="!authorized">
            <router-link :to="{ name: 'login' }">Login</router-link>
            <router-link :to="{ name: 'register' }">Register</router-link>
        </div>
        <div v-else>
            <router-link :to="{ name: 'admin.dashboard' }" v-if="isAdmin">Admin panel</router-link>
            <a href="#" @click.prevent="logout">Logout</a>
        </div>
    </div>
</template>

<script setup>
import {useStore} from "vuex";
import {computed} from "vue";
import {useRouter} from "vue-router";

const store = useStore();
const router = useRouter();

const authorized = computed(() => store.state.auth.authorized);
const isAdmin = computed(() => store.getters["auth/isAdmin"]);

const logout = async () => {
    await store.dispatch('auth/logout');
    await router.push({name: 'index'});
}
</script>

<style lang="scss" scoped>

a {
    @apply underline pl-3 text-blue-800
}

</style>
