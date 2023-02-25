<script setup lang="ts">
import { ProductInterface } from "@/interfaces/productInterface"

defineProps<{
    products?: Array<ProductInterface>
}>()
</script>

<template>
    <div>
        <v-card class="mx-auto mb-3" max-width="344" v-for="product in products" :key="product.id">
            <v-card-item>
                <div>
                    <div class="text-overline mb-1">22/02 - 20:46</div>
                    <div class="text-h6 mb-1">
                        {{ product.name }}
                    </div>
                    <div class="text-caption">{{ product.unitaryValue }} {{ product.measure }} x {{ product.quantity }}</div>
                </div>
            </v-card-item>

            <v-card-actions>
                <span>R${{ product.unitaryValue * product.quantity }}</span>
                <v-spacer></v-spacer>
                <v-btn color="error" @click="$emit('deleteProduct', product.id)">Remover</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<style scoped></style>
