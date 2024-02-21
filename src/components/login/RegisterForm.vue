<script setup lang="ts">
import { ref } from "vue"
import { ValidationRule } from "@/interfaces/validatorType"
import useAuthUser from "@/composables/UseAuthUser"
import { useRouter } from "vue-router"

const { register } = useAuthUser()
const router = useRouter()

const form = ref()
const name = ref<string>("")
const email = ref<string>("")
const password = ref<string>("")

const requiredRule = ref<Array<ValidationRule>>([
    (value) => {
        if (value) return true

        return "Este campo é obrigatório"
    },
])

const registerUser = async () => {
    try {
        await form.value.validate()
        await register({ email: email.value, password: password.value })
        router.push({ name: "Cashier" })
    } catch (error) {
        alert(error)
    }
}
</script>

<template>
    <v-form ref="form" @submit.prevent="registerUser()">
        <v-text-field v-model="name" :rules="requiredRule" label="Nome" required></v-text-field>
        <v-text-field v-model="email" :rules="requiredRule" label="Email" required></v-text-field>
        <v-text-field v-model="password" :rules="requiredRule" label="Senha" type="password" required></v-text-field>

        <div class="d-flex flex-column">
            <v-btn color="success" class="mt-4" block type="submit"> Cadastrar </v-btn>
            <v-btn variant="text" class="mt-4" block to="/login"> Login </v-btn>
        </div>
    </v-form>
</template>
