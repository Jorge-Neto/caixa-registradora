<script setup lang="ts">
import { toLocaleBRL, formatTime, measureText } from "@/composables/filters"
import { ProductInterface } from "@/interfaces/productInterface"

defineProps<{
    products?: Array<ProductInterface>
    isLoading?: boolean
}>()
</script>

<template>
    <div>
        <v-card v-if="isLoading || !products?.length" class="mx-auto mb-3" max-width="344">
            <v-card-item v-if="isLoading">
                <v-progress-circular color="dark-blue" :size="36" indeterminate></v-progress-circular>
            </v-card-item>
            <v-card-item v-else>
                <span>Não há produtos cadastrados nesta data</span>
            </v-card-item>
        </v-card>
        <v-card v-else class="mx-auto mb-3" max-width="344" v-for="product in products" :key="product.id">
            <v-card-item class="pt-4 px-4 pb-0">
                <div>
                    <div class="text-h6">
                        {{ product.name }}
                    </div>
                    <span class="text-caption">{{
                        `${product.quantity} ${measureText(product.measure, product.quantity)} a
                                            ${toLocaleBRL(product.unitary_value)}`
                    }}</span>
                    <p>{{ toLocaleBRL(product.unitary_value * product.quantity) }}</p>
                </div>
            </v-card-item>

            <v-card-actions class="px-4 pb-4">
                <div>{{ formatTime(product.created_at) }}</div>
                <v-spacer></v-spacer>
                <v-btn color="error" @click="$emit('deleteProduct', product.id)">Remover</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<style scoped></style>
