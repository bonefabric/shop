<template>
    <div class="container mx-auto h-24 flex items-center justify-between">
        <div>
            <router-link :to="{ name: 'admin.dashboard' }">Dashboard</router-link>
            <router-link :to="{ name: 'admin.goods' }">Goods</router-link>
        </div>
        <div>
            <router-link :to="{ name: 'index' }">Back to site</router-link>
            <a href="#" @click.prevent="logout">Logout</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>

a {
    @apply underline pl-3 text-blue-800
}

</style>
