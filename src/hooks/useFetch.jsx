import { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs, query, where, documentId, addDoc } from "firebase/firestore";
import Swal from 'sweetalert2'

export const useFetch = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)


   const getProducts = async () => {
        const q = query(collection(db, "productos"));
        runQuery(q).then((data) => setData(data));
   }

   const getProductsByCategory = async (categoryName) => {
        const q = query(collection(db, "productos"), where("category", "==", categoryName));
        runQuery(q).then((data) => setData(data));
    }

    const getProductById = async (id) => {
        const q = query(collection(db, "productos"), where (documentId(), "==", id));
        runQuery(q).then((data) => setData(data[0]));
    }

    const runQuery = async (q) => {
        const querySnapshot = await getDocs(q);
        const products = [];
        querySnapshot.forEach((doc) => {
            products.push({...doc.data(), id: doc.id});
        });
        return products;
    }       

    const getData = async ({ id, categoryName}) => {
        try {
            setLoading(true)
            id ? 
            getProductById(id)
            : categoryName ?
            getProductsByCategory(categoryName)
            :
            getProducts()
        } catch (error) {
            setError(error)
            console.error(error)
          
        } finally {
            setLoading(false)
        }
    }

    const addOrder =  (order) => {
        setLoading(true)
         addDoc(collection(db, "orders"), order).then((docRef) => {
            Swal.fire({
                title: 'Thank you for your purchase!',
                text: `Your order number is: ${docRef.id}`,
                icon: 'success',
                confirmButtonText: 'Ok'
                })
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        })
        .finally (() => setLoading(false))
    }


    return { data, error, loading, getData, addOrder }
}

export default useFetch
