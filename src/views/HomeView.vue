<script setup lang="ts">
import { onMounted, computed, ref } from "vue"
import ProductsTable from "@/components/ProductsTable.vue"
import ProductsCards from "@/components/ProductsCards.vue"
import IncludeModal from "@/components/IncludeModal.vue"
import DateSelector from "@/components/DateSelector.vue"

import store from "@/store/index"
import { useProductStore } from "@/store/product"
import { ProductInterface } from "@/interfaces/productInterface"

const productStore = useProductStore(store())
const showIncludeModal = ref<boolean>(false)

const products = computed<Array<ProductInterface>>(() => productStore.productsList)
const isLoading = computed<boolean>(() => productStore.isLoading)

const deleteProduct = (id) => {
    productStore.deleteProduct(id)
}

const includeProduct = (product: ProductInterface) => {
    productStore.includeProduct(product)
}

const toggleIncludeDialog = (value: boolean) => {
    showIncludeModal.value = value
}

onMounted(async () => {
    productStore.fetchProducts()
})
</script>

<template>
    <div>
        <DateSelector />
        <ProductsCards class="d-block d-sm-none" :products="products" :is-loading="isLoading" @delete-product="deleteProduct" />
        <ProductsTable class="d-none d-sm-block" :products="products" :is-loading="isLoading" @delete-product="deleteProduct" />

        <v-btn v-if="!showIncludeModal" fab color="blue" icon aria-label="Include Button" @click="toggleIncludeDialog(true)">
            <v-icon icon="mdi-plus"></v-icon>
        </v-btn>
        <IncludeModal v-else :show-include-modal="showIncludeModal" @include-product="includeProduct" @close-dialog="toggleIncludeDialog" />
    </div>
</template>

<style scoped></style>
