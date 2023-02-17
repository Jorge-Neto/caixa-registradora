export interface ProductInterface {
    id?: string | number
    name: string
    unitaryValue: number
    measure: "Quilograma" | "Unidade"
    quantity: number
}
