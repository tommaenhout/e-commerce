import ItemListContainer from "../../components/ItemListContainer";
import {useEffect, useState} from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";


const Homepage = () => {
    const {data,getData} = useFetch()
    const {categoryName} = useParams()
    const [greetingMessage, setGreetingMessage] = useState("Welcome to the Muay Thai shop")

    const setGreeting = () => {
        switch (categoryName) {
            case "clothing":
                return "Clothing : Shorts and shirts"
            case "fightingGear":
                return "Fighting gear : Gloves, shin guards, head gear, etc."
            case "trainingMaterial":
                return "Training material : Pads, bags, etc."
            default:
                return "Welcome to the Muay Thai shop"
        }
    }

    useEffect(() => {
        categoryName ? 
        getData({url: "../../products.json", categoryName : categoryName}) :
        getData({url: "../../products.json"})
        setGreetingMessage(setGreeting())
    }, [categoryName])

    
    return (
        <div>
            <ItemListContainer products={data} greeting={greetingMessage}/>
        </div>
    );
    }
export default Homepage;