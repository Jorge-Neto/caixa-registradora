<script setup lang="ts">
import { ref } from "vue"

const filteredProducts = ref([])
const dialog = ref<boolean>(false)
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
                    <v-alert title="Aviso" text="Só é possível baixar os dados do dia mostrado na tabela" type="warning"></v-alert>
                    <v-btn fab color="blue" class="my-2">
                        <v-icon icon="mdi-download"></v-icon>
                        <download-csv ref="child" :data="filteredProducts" name="produtos.csv" :separator-excel="true"> Baixar dados </download-csv>
                    </v-btn>
                </div>
            </v-card-item>
        </v-card>
    </v-dialog>
</template>

<style></style>
