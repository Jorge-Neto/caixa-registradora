import { createClient } from "@supabase/supabase-js"
import { Database } from "@/types/supabase"
import useAuthUser from "@/composables/UseAuthUser"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

supabase.auth.onAuthStateChange((event, session) => {
    const { user } = useAuthUser()

    user.value = session?.user || null
})
