<script setup lang="ts">
import { ProductInterface } from "@/interfaces/productInterface"
import NoProductsCard from "@/components/NoProductsCard.vue"

import { toLocaleBRL, formatTime } from "@/utils/filters"

defineProps<{
    products?: Array<ProductInterface>
}>()
</script>

<template>
    <div>
        <v-card class="mx-auto mb-3" max-width="344" v-for="product in products" :key="product.id">
            <v-card-item>
                <div>
                    <span>{{ toLocaleBRL(product.unitary_value * product.quantity) }}</span>
                    <div class="text-h6 mb-1">
                        {{ product.name }}
                    </div>
                    <div class="text-caption">{{ product.quantity }} {{ product.measure }} a {{ toLocaleBRL(product.unitary_value) }}</div>
                </div>
            </v-card-item>

            <v-card-actions>
                <div class="text-overline mb-1">{{ formatTime(product.created_at) }}</div>
                <v-spacer></v-spacer>
                <v-btn color="error" @click="$emit('deleteProduct', product.id)">Remover</v-btn>
            </v-card-actions>
        </v-card>
        <v-card class="mx-auto mb-3" max-width="344" v-if="!products?.length">
            <NoProductsCard v-if="!products?.length" />
        </v-card>
    </div>
</template>

<style scoped></style>
