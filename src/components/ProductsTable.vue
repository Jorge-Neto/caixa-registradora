<script setup lang="ts">
import { ProductInterface } from "@/types/productType"

defineProps<{
    products?: Array<ProductInterface>
    deleteProduct: (unknown) => void
}>()
</script>

<template>
    <div>
        <v-card class="mb-3">
            <v-table fixed-header>
                <thead>
                    <tr>
                        <th class="text-left">Name</th>
                        <th class="text-center">Valor unitário</th>
                        <th class="text-left">Medida</th>
                        <th class="text-center">Quantidade</th>
                        <th class="text-left">Total</th>
                        <th class="text-center">Ação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id">
                        <td class="text-left">{{ product.name }}</td>
                        <td class="text-center">{{ product.unitaryValue }}</td>
                        <td class="text-left">{{ product.measure }}</td>
                        <td class="text-center">{{ product.quantity }}</td>
                        <td class="text-left">R${{ product.unitaryValue * product.quantity }}</td>
                        <td class="text-center"><v-btn color="error" variant="tonal" @click="deleteProduct(product.id)">Remover</v-btn></td>
                    </tr>
                </tbody>
            </v-table>
        </v-card>
    </div>
</template>

<style scoped></style>
