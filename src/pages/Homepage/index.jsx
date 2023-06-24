import ItemListContainer from "../../components/ItemListContainer";
import {useEffect, useState} from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";


const Homepage = () => {
    const {data,getData} = useFetch()
    const {categoryName} = useParams()

    const message = {
        clothing : "Clothing : Shorts and shirts",
        fightingGear : "Fighting gear : Gloves, shin guards, head gear, etc.",
        trainingMaterial : "Training material : Pads, bags, etc."
    }

    useEffect(() => {
        categoryName ? 
        getData({url: "../../products.json", categoryName : categoryName}) :
        getData({url: "../../products.json"})
        
    }, [categoryName])

    
    return (
        <>
            <ItemListContainer products={data} greeting={categoryName ? message[categoryName] : "Welcome to the Muay Thai shop"}/>
        </>
    );
    }
export default Homepage;