<script setup lang="ts">
import useAuthUser from "@/composables/UseAuthUser"
import { useRouter } from "vue-router"

const { user, logout } = useAuthUser()
const router = useRouter()

const logoutUser = async () => {
    try {
        await logout()
        router.push({ name: "Login" })
    } catch (error) {
        alert(error)
    }
}
</script>

<template>
    <v-card class="mx-auto include-dialog">
        <v-card-item>
            <div class="pa-2 d-flex flex-column">
                <p>Usuário</p>
                <p>
                    {{ user?.email }}
                </p>

                <v-btn fab class="ma-1" icon aria-label="Logout Button" @click="logoutUser()">
                    <v-icon icon="mdi-power"></v-icon>
                </v-btn>
            </div>
        </v-card-item>
    </v-card>
</template>

<style>
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
