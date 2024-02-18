<script setup lang="ts"></script>

<template>
    <v-layout v-if="$route.name != 'NotFound'" class="top-bar">
        <v-app-bar class="top-bar-list">
            <router-link class="left-link" to="/"><v-btn :disabled="$route.name == 'Cashier'">Resumo do dia</v-btn></router-link>
            <router-link class="right-link" to="/management"><v-btn :disabled="$route.name == 'Products'">Produtos cadastrados</v-btn></router-link>
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
.top-bar-list div {
    flex-direction: column;
}

@media (max-width: 400px) {
    .top-bar-list div {
        height: unset !important;
        margin-top: 2px;
    }
}
@media (min-width: 401px) {
    .top-bar-list div {
        flex-direction: row;
    }
    .left-link {
        margin-left: auto !important;
    }
    .right-link {
        margin-right: auto !important;
    }
}
</style>
