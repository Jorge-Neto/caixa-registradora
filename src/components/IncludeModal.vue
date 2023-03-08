<script setup lang="ts">
import { IncludeProductInterface } from "@/interfaces/productInterface"
import { ValidationRule } from "@/interfaces/validatorType"
import { ref } from "vue"

const form = ref()

defineProps<{
    showIncludeModal: boolean
}>()
const emit = defineEmits(["includeProduct"])
const product: IncludeProductInterface = {
    name: "",
    unitary_value: 0,
    measure: "QuiloGrama",
    quantity: 0,
}
const name = ref<string>("")
const unitary_value = ref<string | number>("")
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
    form.value.validate().then((res) => {
        if (res.valid) {
            const newProduct: IncludeProductInterface = {
                name: name.value,
                unitary_value: unitary_value.value,
                measure: measure.value,
                quantity: quantity.value,
            }
            name.value = ""
            unitary_value.value = 0
            quantity.value = 0
            measure.value = ""
            form.value.reset()
            emit("includeProduct", newProduct)
        }
    })
}
</script>

<template>
    <v-card class="mx-auto include-dialog">
        <template #append>
            <v-btn size="x-small" color="red" icon="mdi-close" @click="$emit('closeDialog', false)"></v-btn>
        </template>
        <v-card-item>
            <v-form ref="form" fast-fail @submit.prevent="saveProduct()" class="pt-1">
                <v-text-field required v-model="product.name" label="Produto" :rules="lengthRule" variant="outlined"></v-text-field>

                <v-text-field required v-model="unitary_value" type="number" label="Valor Unitário" prefix="R$" variant="outlined"></v-text-field>

                <v-text-field required v-model="quantity" label="Quantidade" variant="outlined"></v-text-field>

                <v-select required v-model="measure" label="Medida" :items="measureItems" variant="outlined"></v-select>

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
