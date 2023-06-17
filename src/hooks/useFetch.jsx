import axios from "axios";
import { useState } from "react";



export const useFetch = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

   
    const getData = async ({url, id, categoryName}) => {
        try {
            const response = await axios.get(url)
            id ? 
            setData(response.data.products.find((product) => product.id === id)) 
            : categoryName ?
            setData(response.data.products.filter((product) => product.category === categoryName))
            :
            setData(response.data.products)
        } catch (error) {
            setError(error)
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
     
    

    return { data, error, loading, getData }
}

export default useFetch
