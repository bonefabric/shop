<template>
    <div class="layout-default">
        <navbar/>
        <div class="container mx-auto">
            <router-view/>
        </div>
    </div>
</template>

<script setup>
import Navbar from "../templates/Navbar";
</script>
