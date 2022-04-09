<template>
    <div class="flex flex-col container mx-auto">
        <input type="text" placeholder="name" v-model="name">
        <p class="error" v-for="error in errors.name">{{ error }}</p>
        <input type="email" placeholder="email" v-model="email">
        <p class="error" v-for="error in errors.email">{{ error }}</p>
        <input type="password" placeholder="password" v-model="password">
        <p class="error" v-for="error in errors.password">{{ error }}</p>
        <input type="password" placeholder="confirm password" v-model="password_confirmation">
        <button @click="submit">Submit</button>
    </div>
</template>

<script setup>
import {computed, ref} from "vue";
import {useStore} from "vuex";

const store = useStore();

const name = ref('');
const email = ref('');
const password = ref('');
const password_confirmation = ref('');

const errors = computed(() => store.state.auth.errors);

const submit = async function () {
    await store.dispatch('auth/register', {
        name: name.value,
        email: email.value,
        password: password.value,
        password_confirmation: password_confirmation.value});
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
