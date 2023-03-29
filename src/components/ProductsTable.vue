<script setup lang="ts">
import { toLocaleBRL, formatTime, measureText } from "@/utils/filters"
import { ProductInterface } from "@/interfaces/productInterface"

defineProps<{
    products?: Array<ProductInterface>
    isLoading?: boolean
}>()
</script>

<template>
    <div>
        <v-card class="mb-3">
            <v-table fixed-header>
                <thead>
                    <tr>
                        <th class="text-left">Hora</th>
                        <th class="text-left">Nome</th>
                        <th class="text-left">Preço unitário</th>
                        <th class="text-left">Medida</th>
                        <th class="text-center">Quantidade</th>
                        <th class="text-left">Total</th>
                        <th class="text-center">Ação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="isLoading">
                        <td colspan="7">
                            <v-progress-circular color="dark-blue" :size="36" indeterminate></v-progress-circular>
                        </td>
                    </tr>
                    <tr v-else-if="!products?.length">
                        <td colspan="7">
                            <span>Não há produtos cadastrados nesta data</span>
                        </td>
                    </tr>
                    <tr v-else v-for="product in products" :key="product.id">
                        <td class="text-left">{{ formatTime(product.created_at) }}</td>
                        <td class="text-left">{{ product.name }}</td>
                        <td class="text-left">{{ toLocaleBRL(product.unitary_value) }}</td>
                        <td class="text-left">{{ measureText(product.measure, product.quantity) }}</td>
                        <td class="text-center">{{ product.quantity }}</td>
                        <td class="text-left">{{ toLocaleBRL(product.unitary_value * product.quantity) }}</td>
                        <td class="text-center"><v-btn color="error" variant="tonal" @click="$emit('deleteProduct', product.id)">Remover</v-btn></td>
                    </tr>
                </tbody>
            </v-table>
        </v-card>
    </div>
</template>

<style scoped></style>
