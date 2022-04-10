<template>
    <div class="admin-layout">
        <navbar/>
        <div class="container mx-auto">
            <router-view/>
        </div>
    </div>
</template>

<script setup>
import Navbar from "../templates/admin/Navbar";
</script>
