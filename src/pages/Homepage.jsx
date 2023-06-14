import ItemListContainer from "../components/ItemListContainer";
import {useEffect} from "react";
import useFetch from "../hooks/useFetch";


const Homepage = () => {
    const {data,error,getData,loading} = useFetch()
    useEffect(() => {
        getData("../../products.json")
    }, [])

    return (
        <div>
            <ItemListContainer products={data} greeting="Welcome to the Muay Thai shop"/>
        </div>
    );
    }
export default Homepage;