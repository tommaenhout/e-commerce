import { Button, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { Form } from "./styles";
import Typography from '@mui/material/Typography';
import useFetch from "../../hooks/useFetch";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/shoppingCart";



const initialState = {
    name: "",
    lastName: "",
    city: "",
};


const CheckoutForm = ({items, total, setOpen}) => {
    const [values, setValues] = useState(initialState);
    const { clearCart} = useContext(ShoppingCartContext)
    const {addOrder, loading } = useFetch();

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const order = {
            buyer: values,
            items: items,
            date: new Date(),
            total: total,
        };
        addOrder(order)
        clearCart()
        setOpen(false)
    };

    return (
        <Form onSubmit={onSubmitHandler}>
            <Typography variant="h5">Checkout</Typography>
            <TextField
                variant="outlined"
                margin="normal"
                style={{width: 380 }}
                label="Name"
                name="name"
                value= {values.name}
                onChange = {handleOnChange}
                required
            />
            <TextField
                variant="outlined"
                margin="normal"
                style={{width: 380 }}
                label="Last Name"
                name="lastName"
                value={values.lastName}
                onChange = {handleOnChange}
                required
            />
            <TextField
                variant="outlined"
                margin="normal"
                style={{width: 380 }}
                label="Phone Number"
                name="phone"
                value={values.phone}
                onChange = {handleOnChange}
                required
                type="number"
            />

            <TextField
                variant="outlined"
                margin="normal"
                style={{width: 380 }}
                label="City"
                name="city"
                value={values.city}
                onChange = {handleOnChange}
                required
            />
            <Button
                type="submit"
                variant="contained"
                style={{width: 380, marginTop: 20, backgroundColor: "green", height: 50}}
            >
                Checkout
            </Button>
        </Form>
    )
}

export default CheckoutForm
