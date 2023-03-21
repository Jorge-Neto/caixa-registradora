import { ProductInterface as Product, IncludeProductInterface } from "@/interfaces/productInterface"
import ProductService from "@/services/productService"
import { defineStore } from "pinia"
import { ref } from "vue"
const service = new ProductService()

export const useProductStore = defineStore("product", () => {
    const productsList = ref<Array<Product>>([])

    const fetchProducts = async (): Promise<void> => {
        await service.getAll().then((res: Product[]) => (productsList.value = res))
    }

    const deleteProduct = async (id: number | string) => {
        await service.deleteItem(id)
        fetchProducts()
    }

    const includeProduct = async (product: IncludeProductInterface) => {
        await service.includeItem(product)
        fetchProducts()
    }

    return { productsList, fetchProducts, deleteProduct, includeProduct }
})
