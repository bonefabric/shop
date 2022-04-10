<template>
    Goods create
    <div class="mt-2 flex flex-col">
        <input type="text" placeholder="Name" class="w-1/2 border-2 mb-2" v-model="name">
        <textarea placeholder="Description" class="w-1/2 border-2 mb-2" v-model="description"></textarea>
        <input type="number" placeholder="Cost" class="w-1/2 border-2 mb-2" v-model="cost">
        <div>
            Published:
            <input type="checkbox" class="w-1/2 border-2 mb-2" v-model="published">
        </div>
        <button @click="save" class="border-2 p-2 hover:bg-sky-400">Create</button>
    </div>
</template>

<script setup>
import {ref} from "vue";
import {useStore} from "vuex";

const store = useStore();

const name = ref('');
const description = ref('');
const cost = ref(0.00);
const published = ref(false);

const save = async () => {
    await store.dispatch('goods/store', {
        name: name.value,
        description: description.value,
        cost: cost.value,
        published: published.value,
    })
}

</script>
