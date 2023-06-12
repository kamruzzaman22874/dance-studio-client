import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
// import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
	const { user, loading, token } = useAuth();
	// const token = localStorage.getItem('access-token');
	const [axiosSecure] = useAxiosSecure();
	const { refetch, data: cart = [] } = useQuery({
		queryKey: ['carts', user?.email , token],
		// enabled:!loading ,
		enabled:!loading && !!user?.email  && !! localStorage.getItem('access_token') ,
		queryFn: async () => {
			const res = await axiosSecure(`/carts?email=${user?.email}`);
			// console.log('res from axios', res);
			return res.data;
		},
	});

	return [cart, refetch];
};
export default useCart;