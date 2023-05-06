<script setup lang="ts">
import { toLocaleBRL, formatTime, measureText } from "@/utils/filters"
import { ProductInterface } from "@/interfaces/productInterface"
import { ref } from "vue"

const headers = ref([
    {
        title: "Hora",
        align: "start",
        key: "created_at",
    },
    {
        title: "Nome",
        align: "start",
        key: "name",
    },
    {
        title: "Preço unitário",
        align: "start",
        key: "unitary_value",
    },
    {
        title: "Medida",
        align: "start",
        key: "measure",
    },
    {
        title: "Quantidade",
        align: "center",
        key: "quantity",
    },
    {
        title: "Total",
        align: "start",
        key: "total",
    },
    {
        title: "Ação",
        align: "center",
        key: "actions",
        sortable: false,
    },
])

defineProps<{
    products?: Array<ProductInterface>
    isLoading?: boolean
}>()
</script>

<template>
    <div>
        <v-card class="mb-3">
            <v-data-table
                hide-no-data
                hide-default-footer
                no-data-text="Não há produtos cadastrados nesta data"
                :headers="headers"
                :items="products"
                :loading="isLoading"
                item-title="name"
                item-value="name"
                class="elevation-1"
            >
                <template #[`item.created_at`]="{ item }">
                    {{ formatTime(item.raw.created_at) }}
                </template>
                <template #[`item.unitary_value`]="{ item }">
                    {{ toLocaleBRL(item.raw.unitary_value) }}
                </template>
                <template #[`item.measure`]="{ item }">
                    {{ measureText(item.raw.measure, item.raw.quantity) }}
                </template>
                <template #[`item.total`]="{ item }">
                    {{ toLocaleBRL(item.raw.unitary_value * item.raw.quantity) }}
                </template>
                <template #[`item.actions`]="{ item }">
                    <v-btn color="error" variant="tonal" @click="$emit('deleteProduct', item.raw.id)">Remover</v-btn>
                </template>
                <template #loading>
                    <v-progress-circular color="dark-blue" :size="36" indeterminate></v-progress-circular>
                </template>
                <template #no-data>
                    <span>Não há produtos cadastrados nesta data</span>
                </template>
            </v-data-table>
        </v-card>
    </div>
</template>

<style scoped></style>
