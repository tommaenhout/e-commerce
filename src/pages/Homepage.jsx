import ItemListContainer from "../components/ItemListContainer";
import {useEffect} from "react";
import useFetch from "../hooks/useFetch";


const Homepage = () => {
    const {data,error,getData,loading} = useFetch()
    useEffect(() => {
        getData("../../products.json")
    }, [])

    console.log(data)
    return (
        <div>
            <ItemListContainer greeting="Welcome to the Muay Thai shop"/>
        </div>
    );
    }
export default Homepage;