<template>
    <p v-if="loading">Loading...</p>
    <component :is="layout" v-else/>
</template>

<script setup>
import {useStore} from "vuex";
import {computed, onBeforeMount, ref} from "vue";
import {useRouter} from "vue-router";
import {addFirewall} from "../router";

const store = useStore();
const router = useRouter();
const layout = computed(() => router.currentRoute.value.meta.layout ?? 'default-layout')

const loading = ref(true)

onBeforeMount(async () => {
    await store.dispatch('system/getCsrfToken');
    await store.dispatch('auth/loadUser');
    addFirewall(store);
    loading.value = false;

    const currentRoute = router.currentRoute.value;

    if (currentRoute.meta.access) {
        if (currentRoute.meta.access.authorized && !store.state.auth.authorized) {
            await router.push({name: 'login'});
        } else if (currentRoute.meta.access.guest && store.state.auth.authorized) {
            await router.push({name: 'index'});
        }
    }

});
</script>
