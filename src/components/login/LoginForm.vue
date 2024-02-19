<script setup lang="ts">
import { ref } from "vue"
import { ValidationRule } from "@/interfaces/validatorType"
import useAuthUser from "@/composables/UseAuthUser"
import { useRouter } from "vue-router"

const { login } = useAuthUser()
const router = useRouter()

const form = ref()
const email = ref<string>("")
const password = ref<string>("")

const requiredRule = ref<Array<ValidationRule>>([
    (value) => {
        if (value) return true

        return "Este campo é obrigatório"
    },
])

const registerUser = async () => {}

const LoginButtonPressed = async () => {
    try {
        await form.value.validate()
        await login({ email: email.value, password: password.value })
        router.push({ name: "Cashier" })
    } catch (error) {
        alert(error)
    }
}
</script>
<template>
    <v-form ref="form" @submit.prevent="LoginButtonPressed()">
        <v-text-field v-model="email" :rules="requiredRule" label="Email" required></v-text-field>
        <v-text-field v-model="password" :rules="requiredRule" label="Senha" type="password" required></v-text-field>

        <div class="d-flex flex-column">
            <v-btn color="success" class="mt-4" type="submit" block> Login </v-btn>
            <v-btn variant="text" class="mt-4" disabled block @click="registerUser" to="/register"> Cadastrar </v-btn>
        </div>
    </v-form>
</template>
