import { ref } from "vue"
import { defineStore } from "pinia"
import ProductService from "@/services/ProductService"
import { useDatetimeStore } from "@/store/datetime"
import { ProductInterface as Product, IncludeProductInterface } from "@/interfaces/productInterface"
import store from "@/store/index"

const service = new ProductService()
const dateStore = useDatetimeStore(store())

export const useProductStore = defineStore("product", () => {
    const productsList = ref<Array<Product>>([])
    const isLoading = ref<boolean>(false)

    const fetchProducts = async (): Promise<void> => {
        isLoading.value = true
        await service
            .getAll()
            .then((res: Product[]) => (productsList.value = res))
            .finally(() => (isLoading.value = false))
    }

    const fetchByDate = async (getDate: string = dateStore.date.toString()) => {
        let products: Array<Product> = []
        isLoading.value = true

        await service
            .getByDate(getDate)
            .then((res: Product[]) => (products = res))
            .finally(() => (isLoading.value = false))

        productsList.value = products
    }

    const deleteProduct = async (id: number | string) => {
        await service.deleteItem(id)
        fetchByDate()
    }

    const includeProduct = async (product: IncludeProductInterface) => {
        await service.includeItem(product)
        fetchByDate()
    }

    return { productsList, isLoading, fetchProducts, fetchByDate, deleteProduct, includeProduct }
})
