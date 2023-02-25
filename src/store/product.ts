import { ProductInterface } from "@/interfaces/productInterface"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useProductStore = defineStore("product", () => {
    const products = ref<Array<ProductInterface>>([
        {
            id: 1,
            name: "Bolo",
            unitaryValue: 0.5,
            measure: "Quilograma",
            quantity: 3,
        },
        {
            id: 2,
            name: "Pão",
            unitaryValue: 3,
            measure: "Unidade",
            quantity: 3,
        },
    ])

    const deleteProduct = (id: number | string) => {
        products.value = products.value.filter((product) => product.id != id)
    }

    const includeProduct = (product: ProductInterface) => {
        products.value = [...products.value, product]
    }

    return { products, deleteProduct, includeProduct }
})
