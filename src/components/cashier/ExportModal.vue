<script setup lang="ts">
import { ref } from "vue"
import store from "@/store/index"
import { useProductStore } from "@/store/product"
import { ProductInterface } from "@/interfaces/productInterface"
import ProductService from "@/services/ProductService"

const service = new ProductService()
const inputStartDate = ref()
const inputEndDate = ref()
const productStore = useProductStore(store())

const filteredProducts = ref<Array<ProductInterface>>([])
const dialog = ref<boolean>(false)

const changeStartDate = (variable: any) => {
    const selectedStartDate = new Date(variable.target.valueAsNumber)
    inputStartDate.value = selectedStartDate.setDate(selectedStartDate.getDate() + 1)
}
const changeEndDate = async (variable: any) => {
    const selectedEndDate = new Date(variable.target.valueAsNumber)
    const formatedSelected = selectedEndDate.setDate(selectedEndDate.getDate() + 1)
    inputEndDate.value = new Date(new Date(formatedSelected).setHours(20, 59, 59))
    filteredProducts.value = await service.getByDate(inputStartDate.value, inputEndDate.value)
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
                    <v-chip variant="text" class="mx-2"><v-text-field @change="changeStartDate" hide-details="auto" type="date"></v-text-field></v-chip>
                    <br />
                    <v-chip variant="text" class="mx-2"><v-text-field @change="changeEndDate" hide-details="auto" type="date"></v-text-field></v-chip>
                    <br />
                    <v-btn fab color="blue" class="my-2" :disabled="productStore.isLoading">
                        <v-icon icon="mdi-download"></v-icon>
                        <download-csv ref="child" :data="filteredProducts" name="produtos.csv" :separator-excel="true"> Baixar dados </download-csv>
                    </v-btn>
                </div>
            </v-card-item>
        </v-card>
    </v-dialog>
</template>

<style></style>
