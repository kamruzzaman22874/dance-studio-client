import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {


const location = useLocation()
    const  enrolledClass = location.state.enrolledClass;
    const price = enrolledClass.price
    const amount = parseFloat(price)
    console.log(amount);


    return (
        <div className="w-full">
            <h2 className='text-3xl'>Payment method apply</h2>
            <Elements stripe={stripePromise}>
				<Checkout price={amount}></Checkout>
			</Elements>
        </div>
    );
};

export default Payment;