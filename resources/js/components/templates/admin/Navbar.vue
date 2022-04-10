<template>
    <div class="bg-sky-400 mb-2">
        <div class="container mx-auto h-24 flex items-center justify-between">
            <div>
                <router-link :to="{ name: 'admin.dashboard' }">Dashboard</router-link>
                <router-link :to="{ name: 'admin.goods.index' }">Goods</router-link>
            </div>
            <div>
                <router-link :to="{ name: 'index' }">Back to site</router-link>
                <a href="#" @click.prevent="logout">Logout</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

a {
    @apply pl-3 hover:text-black text-gray-600;

    &.link-active {
        @apply text-black;
    }
}
</style>
