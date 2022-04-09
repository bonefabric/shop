<template>
    <div class="flex flex-col container mx-auto">
        <input type="email" placeholder="email" v-model="email">
        <p class="error" v-for="error in errors.email">{{ error }}</p>
        <input type="password" placeholder="password" v-model="password">
        <p class="error" v-for="error in errors.password">{{ error }}</p>
        <button @click="submit">Submit</button>
    </div>
</template>

<script setup>
import {computed, ref} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

const store = useStore();
const router = useRouter();

const email = ref('');
const password = ref('');

const errors = computed(() => store.state.auth.errors);

const submit = async function () {
    await store.dispatch('auth/login', {
        email: email.value,
        password: password.value});
    if (store.state.auth.authorized) await router.push({ name: 'index' });
}
</script>

<style lang="scss" scoped>
input {
    @apply m-3 border-2
}
button {
    @apply border-2
}

.error {
    @apply text-red-600
}
</style>
