<script setup lang="ts">
import { IncludeProductInterface } from "@/interfaces/productInterface"
import { ValidationRule } from "@/interfaces/validatorType"
import { ref } from "vue"

const form = ref()

// defineProps<{
//     showIncludeModal: boolean
// }>()
const emit = defineEmits(["includeProduct"])
const dialog = ref<boolean>(false)
const name = ref<string>("")
const unitary_value = ref<string | number>("")
const quantity = ref<string | number>("")
const measure = ref<string>()
const measureItems = ref<Array<string>>(["Quilograma", "Grama", "Unidade"])
const lengthRule = ref<Array<ValidationRule>>([
    (value) => {
        if (value?.length > 2) return true

        return "O nome do produto deve conter mais de 2 letras"
    },
    (value) => {
        if (value) return true

        return "Produto é obrigatório"
    },
])

const changeValueLabel = () => {
    if (!measure.value) return "Valor"
    else if (measure.value === "Unidade") return "Valor da Unidade"
    else return "Valor do Quilo"
}

const changeQuantityLabel = () => {
    if (!measure.value) return "Quantidade"
    else if (measure.value === "Unidade") return "Quantidade"
    else return "Peso"
}

const clearFields = () => {
    name.value = ""
    unitary_value.value = ""
    quantity.value = ""
    measure.value = ""
    form.value.resetValidation()
    form.value.reset()
}

const saveProduct = () => {
    if (measure.value === "Grama") {
        measure.value = "Quilograma"
        quantity.value = Number(quantity.value) / 1000
    }

    const newProduct: IncludeProductInterface = {
        name: name.value,
        unitary_value: Number(unitary_value.value),
        measure: measure.value === "Unidade" ? "Unidade" : "Quilograma",
        quantity: Number(quantity.value),
    }

    emit("includeProduct", newProduct)
}

const saveButtonPressed = () => {
    form.value.validate().then((res) => {
        if (res.valid) {
            saveProduct()
            clearFields()
            dialog.value = false
        }
    })
}
</script>

<template>
    <v-dialog v-model="dialog">
        <template #activator="{ props }">
            <v-btn v-bind="props" fab color="indigo" class="mx-1" icon aria-label="Include Button">
                <v-icon icon="mdi-plus"></v-icon>
            </v-btn>
        </template>
        <v-card class="mx-auto include-dialog">
            <template #append>
                <v-btn size="x-small" color="red" icon="mdi-close" block @click="dialog = false"></v-btn>
            </template>
            <v-card-item>
                <v-form ref="form" fast-fail @submit.prevent="saveButtonPressed()" class="pt-5 mb-5">
                    <v-text-field required v-model="name" label="Produto" :rules="lengthRule" variant="outlined"></v-text-field>

                    <v-radio-group v-model="measure" label="Medida" inline>
                        <v-radio v-for="(option, index) in measureItems" required :rules="[(v) => !!v || 'Medida é obrigatório']" :key="`option-${index}`" :label="option" :value="option"></v-radio>
                    </v-radio-group>

                    <v-text-field :rules="[(v) => !!v || 'Quantidade é obrigatório']" required v-model="quantity" type="number" :label="changeQuantityLabel()" variant="outlined"></v-text-field>

                    <v-text-field
                        :rules="[(v) => !!v || 'Valor unitário é obrigatório']"
                        required
                        v-model="unitary_value"
                        type="number"
                        :label="changeValueLabel()"
                        prefix="R$"
                        variant="outlined"
                    ></v-text-field>

                    <v-btn color="success" variant="tonal" type="submit" block class="mt-2">Adicionar</v-btn>
                </v-form>
            </v-card-item>
        </v-card>
    </v-dialog>
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
