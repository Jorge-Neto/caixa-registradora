<script setup lang="ts">
import { IncludeProductInterface } from "@/interfaces/productInterface"
import { ValidationRule } from "@/interfaces/validatorType"
import { ref } from "vue"

defineProps<{
    showIncludeModal: boolean
}>()
const emit = defineEmits(["includeProduct"])
const name = ref<string>("")
const unitaryValue = ref<string | number>("")
const quantity = ref<string | number>("")
const measure = ref<string>("")
const measureItems = ref<Array<string>>(["Quilograma", "Unidade"])
const lengthRule = ref<Array<ValidationRule>>([
    (value) => {
        if (value?.length > 2) return true

        return "o nome do produto deve conter mais de 2 letras"
    },
])

const saveProduct = () => {
    const newProduct: IncludeProductInterface = {
        name: name.value,
        unitaryValue: unitaryValue.value,
        measure: measure.value,
        quantity: quantity.value,
    }
    name.value = ""
    unitaryValue.value = 0
    quantity.value = 0
    measure.value = ""

    emit("includeProduct", newProduct)
}
</script>

<template>
    <v-card class="mx-auto include-dialog">
        <template #append>
            <v-btn size="x-small" color="red" icon="mdi-close" @click="$emit('closeDialog', false)"></v-btn>
        </template>
        <v-card-item>
            <v-form fast-fail @submit.prevent="saveProduct()" class="pt-1">
                <v-text-field v-model="name" label="Produto" :rules="lengthRule" variant="outlined"></v-text-field>

                <v-text-field v-model="unitaryValue" type="number" label="Valor Unitário" prefix="R$" variant="outlined"></v-text-field>

                <v-text-field v-model="quantity" label="Quantidade" variant="outlined"></v-text-field>

                <v-select v-model="measure" label="Medida" :items="measureItems" variant="outlined"></v-select>

                <v-btn color="success" variant="tonal" type="submit" block class="mt-2">Adicionar</v-btn>
            </v-form>
        </v-card-item>
    </v-card>
</template>

<style scoped>
.include-dialog {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 50;
    transform: translate(-50%, -50%);
    width: 75%;
}

@media screen and (min-width: 650px) {
    .include-dialog {
        width: 50%;
    }
}
</style>
