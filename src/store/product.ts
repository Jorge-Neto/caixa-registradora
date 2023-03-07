import { ProductInterface as Product } from "@/interfaces/productInterface"
import ProductService from "@/services/productService"
import { defineStore } from "pinia"
import { ref } from "vue"
const service = new ProductService()

export const useProductStore = defineStore("product", () => {
    const productsList = ref<Array<Product>>([])

    const fetchProducts = async () => {
        await service.getAll().then((res: Product[]) => (productsList.value = res))
    }

    const deleteProduct = (id: number | string) => {
        productsList.value = productsList.value.filter((product) => product.id != id)
    }

    const includeProduct = (product: Product) => {
        productsList.value = [...productsList.value, product]
    }

    return { productsList, fetchProducts, deleteProduct, includeProduct }
})
