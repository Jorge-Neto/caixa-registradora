<script setup lang="ts">
import store from "@/store/index"
import { useProductStore } from "@/store/product"
import { computed } from "vue"

const productStore = useProductStore(store())

const products = computed(() => productStore.products)

const deleteProduct = (id) => {
    productStore.deleteProduct(id)
}
</script>

<template>
    <div>
        <v-card class="d-block d-sm-none mx-auto mb-3" max-width="344" v-for="product in products" :key="product.id">
            <v-card-item>
                <div>
                    <div class="text-overline mb-1">Data - Hora</div>
                    <div class="text-h6 mb-1">
                        {{ product.name }}
                    </div>
                    <div class="text-caption">{{ product.unitaryValue }} {{ product.measure }} x {{ product.quantity }}</div>
                </div>
            </v-card-item>

            <v-card-actions>
                <span>R${{ product.unitaryValue * product.quantity }}</span>
                <v-spacer></v-spacer>
                <v-btn color="error" variant="tonal" @click="deleteProduct(product.id)">Remover</v-btn>
            </v-card-actions>
        </v-card>

        <v-card class="d-none d-sm-block">
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
