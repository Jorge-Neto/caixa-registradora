export interface ProductInterface {
    id: string | number
    name: string
    unitary_value: number
    measure: "Quilograma" | "Unidade"
    quantity: number
    created_at: string
}

export interface IncludeProductInterface {
    name: string
    unitaryValue: string | number
    measure: string | null
    quantity: string | number
}
