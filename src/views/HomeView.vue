<script setup lang="ts">
import ProductsTable from "@/components/ProductsTable.vue"
import ProductsCards from "@/components/ProductsCards.vue"
import IncludeModal from "@/components/IncludeModal.vue"

import store from "@/store/index"
import { useProductStore } from "@/store/product"
import { computed, ref } from "vue"
import { ProductInterface } from "@/types/productType"

const productStore = useProductStore(store())
const showIncludeModal = ref<boolean>(false)

const products = computed<Array<ProductInterface>>(() => productStore.products)

const deleteProduct = (id) => {
    productStore.deleteProduct(id)
}

const toggleIncludeDialog = (value: boolean) => {
    showIncludeModal.value = value
}
</script>

<template>
    <div>
        <ProductsCards class="d-block d-sm-none" :products="products" :delete-product="deleteProduct" />
        <ProductsTable class="d-none d-sm-block" :products="products" :delete-product="deleteProduct" />

        <v-btn v-if="!showIncludeModal" fab color="blue" icon @click="toggleIncludeDialog(true)">
            <v-icon icon="mdi-plus"></v-icon>
        </v-btn>
        <IncludeModal v-else :show-include-modal="showIncludeModal" @close-dialog="toggleIncludeDialog" />
    </div>
</template>

<style scoped></style>
