export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
    public: {
        Tables: {
            products: {
                Row: {
                    created_at: string
                    id: number
                    measure: string
                    name: string
                    quantity: number
                    unitary_value: number
                }
                Insert: {
                    created_at?: string
                    id?: number
                    measure: string
                    name: string
                    quantity: number
                    unitary_value: number
                }
                Update: {
                    created_at?: string
                    id?: number
                    measure?: string
                    name?: string
                    quantity?: number
                    unitary_value?: number
                }
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}
