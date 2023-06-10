import { useQuery } from "@tanstack/react-query";


const ManageUsers = () => {

    const { data: getUser } = useQuery({
			queryKey: ['getUser'],
			queryFn: async () => {
				try {
					const res = await fetch('http://localhost:7000/users');
					const data = await res.json();
					return data;
				} catch (err) {
					console.log(err);
				}
			},
		});
    console.log(getUser);
    
    return (
        <div>
            
        </div>
    );
};

export default ManageUsers;