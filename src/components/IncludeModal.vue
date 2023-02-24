<script setup lang="ts">
import { ValidationRule } from "@/types/validatorType"
import { ref } from "vue"

defineProps<{
    showIncludeModal: boolean
}>()

const name = ref<string>("")
const unitaryValue = ref<string>("")
const quantity = ref<string | number>("")
const lengthRules = ref<Array<ValidationRule>>([
    (value) => {
        if (value?.length > 3) return true

        return "o nome do produto deve conter mais de 2 letras"
    },
])
const caractersRules = ref<Array<ValidationRule>>([
    (value) => {
        if (/[^0-9]/.test(value)) return true

        return "Last name can not contain digits."
    },
])
</script>

<template>
    <v-card class="mx-auto include-dialog w-50">
        <template #append>
            <v-btn size="x-small" color="red" icon="mdi-close" @click="$emit('closeDialog', false)"></v-btn>
        </template>
        <v-card-item>
            <v-form fast-fail @submit.prevent class="pt-1">
                <v-text-field v-model="name" label="Produto" :rules="(lengthRules, caractersRules)" variant="outlined"></v-text-field>

                <v-text-field v-model="unitaryValue" inputmode="numeric" label="Valor Unitário" prefix="R$" variant="outlined"></v-text-field>

                <v-select label="Medida" :items="['Quilograma', 'Unidade']" variant="outlined"></v-select>

                <v-text-field v-model="quantity" label="Quantidade" variant="outlined"></v-text-field>

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
}
</style>
