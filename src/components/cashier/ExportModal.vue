<script setup lang="ts">
import { ref } from "vue"
import { toLocaleBRL, measureText } from "@/composables/filters"

import store from "@/store/index"
import { useProductStore } from "@/store/product"
import ProductService from "@/services/ProductService"
import { ProductSheet } from "@/interfaces/productSheet"
import { ProductInterface } from "@/interfaces/productInterface"

const service = new ProductService()
const inputStartDate = ref()
const inputEndDate = ref()
const productStore = useProductStore(store())

const filteredProducts = ref<Array<ProductSheet>>([])
const dialog = ref<boolean>(false)

const changeStartDate = (variable) => {
    const selectedStartDate = new Date(variable.target.valueAsNumber)
    inputStartDate.value = selectedStartDate.setDate(selectedStartDate.getDate() + 1)
}
const changeEndDate = async (variable) => {
    const selectedEndDate = new Date(variable.target.valueAsNumber)
    const formatedSelected = selectedEndDate.setDate(selectedEndDate.getDate() + 1)
    inputEndDate.value = new Date(new Date(formatedSelected).setHours(20, 59, 59))
    prepareForDownload()
}

const prepareForDownload = async () => {
    const products = await service.getByDate(inputStartDate.value, inputEndDate.value)
    const listToDownload: ProductSheet[] = products.map((product: ProductInterface): ProductSheet => {
        return {
            Data: new Date(product.created_at).toLocaleString(),
            Produto: product.name,
            Medida: measureText(product.measure, product.quantity),
            Quantidade: product.quantity,
            Valor: product.unitary_value,
            Total: toLocaleBRL(product.unitary_value * product.quantity),
        }
    })
    filteredProducts.value = [...listToDownload]
}

const getFileName = () => {
    if (inputStartDate.value && inputEndDate.value) {
        return `${new Date(inputStartDate.value).toLocaleDateString()}-${new Date(inputEndDate.value).toLocaleDateString()}.csv`
    }
    return ""
}
</script>

<template>
    <v-dialog v-model="dialog">
        <template #activator="{ props }">
            <v-btn v-bind="props" fab color="green" class="mx-1" icon aria-label="Include Button">
                <v-icon icon="mdi-download"></v-icon>
            </v-btn>
        </template>
        <v-card class="mx-auto">
            <template #append>
                <v-btn size="x-small" color="red" icon="mdi-close" block @click="dialog = false"></v-btn>
            </template>
            <v-card-item class="pa-5">
                <div class="d-flex flex-column align-center">
                    <span>De</span>
                    <v-chip variant="text" class="mx-2"><v-text-field @change="changeStartDate" hide-details="auto" type="date"></v-text-field></v-chip>
                    <br />
                    <span>Até</span>
                    <v-chip variant="text" class="mx-2"><v-text-field @change="changeEndDate" hide-details="auto" type="date"></v-text-field></v-chip>
                    <br />
                    <v-btn fab color="blue" class="my-2" :disabled="productStore.isLoading">
                        <v-icon icon="mdi-download"></v-icon>
                        <download-csv ref="child" :data="filteredProducts" :name="getFileName()" :separator-excel="true"> Baixar dados </download-csv>
                    </v-btn>
                </div>
            </v-card-item>
        </v-card>
    </v-dialog>
</template>

<style></style>
