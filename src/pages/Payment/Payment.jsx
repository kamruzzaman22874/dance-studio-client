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
        fetch(`https://dance-studio-server.vercel.app/selectedClasses/${id?.id}`)
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
            <h2 className='text-3xl text-orange-500 font-mono shadow-lg text-center p-3'>Payment</h2>
            <Elements stripe={stripePromise}>
				<Checkout cart={cart} price={amount}></Checkout>
			</Elements>
        </div>
    );
};

export default Payment;