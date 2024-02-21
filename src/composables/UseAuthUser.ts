import { supabase } from "@/lib/supabase"
import { User } from "@supabase/supabase-js"
import { ref } from "vue"

const user = ref<User | null>(null)
export default function useAuthUser() {
    const login = async ({ email, password }) => {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error

        return data.user
    }

    const loginWithSocialProvider = async (provider) => {
        const { data, error } = await supabase.auth.signInWithOAuth({ provider })
        if (error) throw error

        return data
    }

    const logout = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
    }

    const isLoggedIn = async () => {
        return !!user.value
    }

    const register = async ({ email, password }) => {
        const { data, error } = await supabase.auth.signUp({ email, password })
        if (error) throw error

        return data.user
    }

    const update = async (user) => {
        const { data, error } = await supabase.auth.updateUser(user)
        if (error) throw error

        return data.user
    }

    const sendPasswordResetEmail = async (email) => {
        const { data, error } = await supabase.auth.resetPasswordForEmail(email)
        if (error) throw error

        return data
    }

    return {
        user,
        login,
        loginWithSocialProvider,
        logout,
        isLoggedIn,
        register,
        update,
        sendPasswordResetEmail,
    }
}
