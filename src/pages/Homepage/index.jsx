import ItemListContainer from "../../components/ItemListContainer";
import {useEffect} from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";


const Homepage = () => {
    const {data,getData, loading} = useFetch()
    const {categoryName} = useParams()

    const message = {
        clothing : "Clothing : Shorts and shirts",
        fightingGear : "Fighting gear : Gloves, shin guards, head gear, etc.",
        trainingMaterial : "Training material : Pads, bags, etc."
    }


    useEffect(() => {
        categoryName ? 
        getData({categoryName : categoryName}) :
        getData({})
    }, [categoryName])

    
    return (
        <>
            <ItemListContainer products={data} greeting={categoryName ? message[categoryName] : "Welcome to the Muay Thai shop"}/>
        </>
    );
    }
export default Homepage;