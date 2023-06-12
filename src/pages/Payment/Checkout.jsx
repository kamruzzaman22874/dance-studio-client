import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';
import useAxiosSecure from '../../hook/useAxiosSecure';

const Checkout = ({price, cart}) => {
    const stripe = useStripe();
	const elements = useElements();
	const { user } = useAuth();
	const [axiosSecure] = useAxiosSecure();
	const [cardError, setCardError] = useState('');
	const [clientSecret, setClientSecret] = useState('');
	const [processing, setProcessing] = useState(false);
	const [transactionId, setTransactionId] = useState('');
    useEffect(() => {
		if (price > 0) {
			axiosSecure.post('/create-payment-intent', { price }).then((res) => {
				setClientSecret(res.data.clientSecret);
			});
		}
	}, [price]);

    const handleSubmit = async (event) => {
		event.preventDefault();
		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);
		if (card == null) {
			return;
		}

		const { error } = await stripe.createPaymentMethod({
			type: 'card',
			card,
		});
		if (error) {
			console.log('[error]', error);
			setCardError(error.message);
		} else {
			setCardError('');
		}
		setProcessing(true);
		const { paymentIntent, error: confirmError } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						email: user?.email || 'anonymous',
						name: user?.displayName || 'anonymous',
					},
				},
			});
		if (confirmError) {
			console.log(confirmError);
		}
		setProcessing(false);
		if (paymentIntent.status === 'succeeded') {
			setTransactionId(paymentIntent.id);
			const payment = {
				email: user?.email,
				transaction: paymentIntent.id,
				price,
				date: new Date(),
				quantity: cart.length,
				cartItems: cart.map((item) => item._id),
				menuItems: cart.map((item) => item.menuItemId),
				status: 'service pending',
				itemsName: cart.map((item) => item.name),
			};
			axiosSecure.post('/payments', payment).then((res) => {
				if (res.data.insertedId) {
					// confirmation
				}
			});
		}
	};
    return (
        <div>
            <form className='w-2/3 m-8' onSubmit={handleSubmit}>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: '16px',
								color: '#424770',
								'::placeholder': {
									color: '#aab7c4',
								},
							},
							invalid: {
								color: '#9e2146',
							},
						},
					}}
				/>
				<button
					className='btn btn-outline btn-primary btn-sm mt-4'
					type='submit'
					disabled={!stripe || !clientSecret || processing}>
					Pay
				</button>
			</form>
            {cardError && <p className='text-red-600 ml-10'>{cardError}</p>}
			{transactionId && (
				<p className='text-green-600'>Transaction complete : {transactionId}</p>
			)}
        </div>
    );
};

export default Checkout;