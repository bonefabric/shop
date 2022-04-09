<template>
    <div class="container mx-auto h-24 flex items-center justify-between">
        <div>
            <router-link :to="{ name: 'index' }">Index</router-link>
        </div>
        <div v-if="!authorized">
            <router-link :to="{ name: 'login' }">Login</router-link>
            <router-link :to="{ name: 'register' }">Register</router-link>
        </div>
    </div>
</template>

<script setup>
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore();

const authorized = computed(() => store.state.auth.authorized);
</script>

<style lang="scss" scoped>

a {
    @apply underline pl-3 text-blue-800
}

</style>
