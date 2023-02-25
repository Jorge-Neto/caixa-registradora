export interface ProductInterface {
    id?: string | number
    name: string
    unitaryValue: number
    measure: "Quilograma" | "Unidade"
    quantity: number
}

export interface IncludeProductInterface {
    name: string
    unitaryValue: string | number
    measure: string | null
    quantity: string | number
}
