<template>
    Root
</template>

<script setup>
import {useStore} from "vuex";
import {onBeforeMount} from "vue";

const store = useStore();

onBeforeMount(() => store.dispatch('system/getCsrfToken'));
</script>
