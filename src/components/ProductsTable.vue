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
        <v-card class="mb-3">
            <v-table v-if="products?.length" fixed-header>
                <thead>
                    <tr>
                        <th class="text-left">Hora</th>
                        <th class="text-left">Name</th>
                        <th class="text-left">Preço unitário</th>
                        <th class="text-left">Medida</th>
                        <th class="text-center">Quantidade</th>
                        <th class="text-left">Total</th>
                        <th class="text-center">Ação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id">
                        <td class="text-left">{{ formatTime(product.created_at) }}</td>
                        <td class="text-left">{{ product.name }}</td>
                        <td class="text-left">{{ toLocaleBRL(product.unitary_value) }}</td>
                        <td class="text-left">{{ product.measure }}</td>
                        <td class="text-center">{{ product.quantity }}</td>
                        <td class="text-left">{{ toLocaleBRL(product.unitary_value * product.quantity) }}</td>
                        <td class="text-center"><v-btn color="error" variant="tonal" @click="$emit('deleteProduct', product.id)">Remover</v-btn></td>
                    </tr>
                </tbody>
            </v-table>

            <NoProductsCard v-else />
        </v-card>
    </div>
</template>

<style scoped></style>
