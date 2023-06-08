<script setup lang="ts">
import { useDatetimeStore } from "@/store/datetime"
import { useProductStore } from "@/store/product"
import { isToday } from "@/composables/filters"
import { computed, watch } from "vue"

import store from "@/store/index"
const dateStore = useDatetimeStore(store())
const productStore = useProductStore(store())

const dayOfDate = computed<string>(() => dateStore.dayToShow)
const fullDate = computed<string>(() => dateStore.date.toString())
const isLoading = computed<boolean>(() => productStore.isLoading)

watch(fullDate, async (date) => {
    await productStore.fetchByDate(date)
})

const previousDay = () => {
    dateStore.previousDay()
}
const laterDay = (currentDay: string) => {
    if (!isToday(currentDay)) dateStore.laterDay()
}
</script>

<template>
    <div>
        <v-btn @click="laterDay(fullDate)" variant="text" icon="mdi-menu-left" :disabled="isToday(fullDate) || isLoading" aria-label="Next Button"> </v-btn>
        <v-chip v-if="dayOfDate" variant="text" class="mx-2">{{ dayOfDate }}</v-chip>
        <v-btn @click="previousDay" variant="text" icon="mdi-menu-right" :disabled="isLoading" aria-label="Previous Button"> </v-btn>
    </div>
</template>

<style scoped></style>
