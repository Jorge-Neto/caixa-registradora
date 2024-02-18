/*eslint no-useless-rename: ["error", { ignoreExport: true }]*/
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
    unitary_value: number
    measure: string
    quantity: number
}

export interface ProductTableHeaderInterface {
    key?: "data-table-group" | "data-table-select" | "data-table-expand" | string | undefined
    title?: string | undefined
    align?: "start" | "end" | "center" | undefined
}
