import { defineStore } from "pinia"
import { computed, ref } from "vue"
import { formatToDay } from "@/utils/filters"

export const useDatetimeStore = defineStore("datetime", () => {
    const date = ref<Date>(new Date())
    const dayToShow = computed<string>(() => formatToDay(date.value))

    const previousDay = () => {
        const previousDay = date.value.setDate(date.value.getDate() - 1)
        const yesterday: Date = new Date(previousDay)
        date.value = yesterday
    }
    const laterDay = () => {
        const laterDay = date.value.setDate(date.value.getDate() + 1)
        const tomorrow: Date = new Date(laterDay)
        date.value = tomorrow
    }

    return {
        date,
        dayToShow,
        laterDay,
        previousDay,
    }
})
