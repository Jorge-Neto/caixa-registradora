<script setup lang="ts">
import store from "@/store/index"
import { useCounterStore } from "@/store/counter"

const counterStore = useCounterStore(store())
</script>

<template>
    <div class="card">
        <v-btn type="button" @click="counterStore.increment()">count is {{ counterStore.count }}</v-btn>
        <p>
            Edit
            <code>components/HelloWorld.vue</code> to test HMR
        </p>
    </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
