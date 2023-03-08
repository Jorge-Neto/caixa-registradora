import { supabase } from "@/lib/supabase"
import { ProductInterface as Product } from "@/interfaces/productInterface"

class ProductService {
    getAll = async (): Promise<Product[]> => {
        const today: Date = new Date(new Date().setHours(0, 0, 0, 0))
        const todayISOString: string = today.toISOString()
        try {
            const { data, error, status } = await supabase.from("products").select("*").gte("created_at", todayISOString)

            if (error && status !== 406) throw error

            if (data) return data as Array<Product>
        } catch (error) {
            console.error("Error retrieving data from db", error)
        }
        return []
    }

    deleteItem = async (productId: number | string): Promise<void> => {
        try {
            await supabase.from("products").delete().eq("id", productId)
        } catch (error) {
            console.error("error", error)
        }
    }

    //   getByDate = async (date: string): Promise<Product[]> => {
    // const newDate: string = new Date(new Date(date).setHours(0, 0, 0, 0)).toISOString()
    // const newDateLimit: string = new Date(new Date(date).setHours(23, 59, 59)).toISOString()

    // try {
    //   const { data, error, status } = await supabase
    //     .from('products')
    //     .select('*')
    //     .gte('created_at', newDate)
    //     .lte('created_at', newDateLimit)

    //   if (error && status !== 406)
    //     throw error

    //   if (data)
    //     return data as Array<Product>
    // }
    // catch (error) {
    //   console.error('Error retrieving data from db', error)
    // }
    // return []
    // }

    //   include = async (product: Product): Promise<null | number> => {
    // try {
    //   const { status, error } = await supabase.from('products').insert(product).single()

    //   if (error) {
    //     console.error(error.message)
    //     console.error('There was an error inserting', error)
    //     return null
    //   }

    //   return status
    // }
    // catch (err) {
    //   console.error('Error')
    //   console.error('Unknown problem inserting to db', err)
    //   return null
    // }
    //   }
}

export default ProductService
