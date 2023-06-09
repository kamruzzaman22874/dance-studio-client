import { data } from 'autoprefixer';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hook/useAxiosSecure';

const ManageClasses = () => {
	const [axiosSecure] = useAxiosSecure();
	const { data: classes = [] } = useQuery({
		queryKey: ['admin-approved'],
		queryFn: async () => {
			const res = await axiosSecure('/classes');
			return res.data;
		},
	});

	axiosSecure.get('/classes').then((data) => {
		if (data.data.insertedId) {
			Swal.fire({
				position: 'top-end',
				icon: 'success',
				title: 'Your work has been saved',
				showConfirmButton: false,
				timer: 1500,
			});
		}
		console.log(data);
	});
	return (
		<div>
			<div className='overflow-x-auto shadow-lg py-6 rounded'>
				<table className='table'>
					{/* head */}
					<thead>
						<tr className='bg-slate-900 text-white text-lg font-semibold'>
							<th>Image</th>
							<th>Class Name</th>
							<th>Instructor Name</th>
							<th>Instructor Email</th>
							<th>Available Seats</th>
							<th>Price</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						{classes.map((item) => (
							<>
								<tr>
									<td>
										<div className='flex items-center space-x-3'>
											<div className='avatar'>
												<div className='mask rounded w-12 h-12'>
													<img
														src={item.image}
														alt='Avatar Tailwind CSS Component'
													/>
												</div>
											</div>
										</div>
									</td>
									<td>{item.classesName}</td>
									<td>{item.instructorName}</td>
									<td>{item.instructorEmail}</td>
									<td className='text-center'>{item.availableSeats}</td>
									<td>{item.price}</td>
									<td></td>
									<th>
										<button className='btn btn-ghost btn-xs'>details</button>
									</th>
								</tr>
							</>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ManageClasses;
