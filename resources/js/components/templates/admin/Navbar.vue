<template>
    <div class="container mx-auto h-24 flex items-center justify-between">
        <div>
            <router-link :to="{ name: 'index' }">Back to site</router-link>
        </div>
        <div>
            <a href="#" @click.prevent="logout">Logout</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>

a {
    @apply underline pl-3 text-blue-800
}

</style>
