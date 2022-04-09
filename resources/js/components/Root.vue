<template>
    <component :is="layout"/>
</template>

<script setup>
import {useStore} from "vuex";
import {computed, onBeforeMount} from "vue";
import {useRouter} from "vue-router";

const store = useStore();
const router = useRouter();
const layout = computed(() => router.currentRoute.value.meta.layout ?? 'default-layout')

onBeforeMount(() => store.dispatch('system/getCsrfToken'));
</script>
