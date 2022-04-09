<template>
    <div class="container h-24 flex items-center">
        <router-link :to="{ name: 'index' }">Index</router-link>
        <router-link :to="{ name: 'register' }">Register</router-link>
    </div>
</template>

<style lang="scss" scoped>

a {
    @apply underline pl-3 text-blue-800
}

</style>
