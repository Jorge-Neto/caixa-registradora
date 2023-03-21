<script setup lang="ts">
import { ref } from "vue"

const page = ref<number>(1)
</script>

<template>
    <v-pagination v-model="page" :length="3" density="comfortable"> </v-pagination>
</template>

<style scoped></style>
