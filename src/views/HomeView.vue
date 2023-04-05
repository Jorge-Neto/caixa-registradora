<script setup lang="ts">
import { onMounted, computed } from "vue"
import ProductsTable from "@/components/ProductsTable.vue"
import ProductsCards from "@/components/ProductsCards.vue"
import IncludeModal from "@/components/IncludeModal.vue"
import ExportModal from "@/components/ExportModal.vue"
import DateSelector from "@/components/DateSelector.vue"

import store from "@/store/index"
import { useProductStore } from "@/store/product"
import { ProductInterface } from "@/interfaces/productInterface"

const productStore = useProductStore(store())

const products = computed<Array<ProductInterface>>(() => productStore.productsList)
const isLoading = computed<boolean>(() => productStore.isLoading)

const deleteProduct = (id) => {
    productStore.deleteProduct(id)
}

const includeProduct = (product: ProductInterface) => {
    productStore.includeProduct(product)
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

        <IncludeModal @include-product="includeProduct" />
        <ExportModal />
    </div>
</template>

<style scoped></style>
