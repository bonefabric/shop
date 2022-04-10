<template>
    <div class="h-14">
        <button @click="goToCreate" class="border-2 p-2 hover:bg-sky-400">Create</button>
    </div>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter();

const goToCreate = () => router.push({ name: 'admin.goods.create' });
</script>
