import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);


const Payment = () => {
    const [cart, setCart] =useState() 


const location = useLocation()
    const id = useParams()
    console.log(id);

    useEffect(()=>{
        fetch(`http://localhost:7000/selectedClasses/${id?.id}`)
        .then(res => res.json())
        .then(data => {
            setCart(data);
        })
    },[id])
    const  enrolledClass = location.state.enrolledClass;
    const price = enrolledClass.price
    const amount = parseFloat(price)
    console.log(amount);


    return (
        <div className="w-full">
            <h2 className='text-3xl'>Payment method apply</h2>
            <Elements stripe={stripePromise}>
				<Checkout cart={cart} price={amount}></Checkout>
			</Elements>
        </div>
    );
};

export default Payment;