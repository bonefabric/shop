<template>
    <p v-if="loading">Loading...</p>
    <component :is="layout" v-else/>
</template>

<script setup>
import {useStore} from "vuex";
import {computed, onBeforeMount, ref} from "vue";
import {useRouter} from "vue-router";

const store = useStore();
const router = useRouter();
const layout = computed(() => router.currentRoute.value.meta.layout ?? 'default-layout')

const loading = ref(true)

onBeforeMount(async () => {
    await store.dispatch('system/getCsrfToken');
    await store.dispatch('auth/loadUser');
    loading.value = false;
});
</script>
