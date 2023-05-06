<script setup lang="ts"></script>

<template>
    <v-layout v-if="$route.name != 'NotFound'" class="top-bar">
        <v-app-bar class="top-bar-list">
            <router-link class="ml-auto" to="/"><v-btn>Resumo do dia</v-btn></router-link>
            <router-link class="mr-auto" to="/management"><v-btn>Produtos cadastrados</v-btn></router-link>
        </v-app-bar>
    </v-layout>
</template>

<style scooped>
.top-bar {
    margin-bottom: 48px;
}
.top-bar-list {
    background-color: transparent !important;
}
</style>
