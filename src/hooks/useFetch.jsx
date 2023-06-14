import axios from "axios";
import { useState } from "react";



export const useFetch = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

   
    const getData = async (url) => {
        try {
            const response = await axios.get(url)
            console.log(response.data)
            setData(response.data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }
     
    

    return { data, error, loading, getData }
}

export default useFetch
