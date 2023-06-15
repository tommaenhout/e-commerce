import axios from "axios";
import { useState } from "react";



export const useFetch = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

   
    const getData = async ({url, id, categoryName}) => {
        try {
            console.log(id)
            console.log(categoryName)
            const response = await axios.get(url)
            id ? 
            setData(response.data.products.find((product) => product.id === id)) 
            : categoryName ?
            setData(response.data.products.filter((product) => product.category === categoryName))
            :
            setData(response.data.products)
            console.log(data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }
     
    

    return { data, error, loading, getData }
}

export default useFetch
