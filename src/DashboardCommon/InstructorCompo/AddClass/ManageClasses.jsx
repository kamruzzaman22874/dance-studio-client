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
	});

	const handleApproveStatus = (item) => {
		axiosSecure.patch(`/classes/approve/${item._id}`).then((data) => {
			console.log(data);
		});
	};
	const handleDenyStatus = (item) => {
		axiosSecure.patch(`/classes/approve/${item._id}`).then((data) => {
			console.log(data);
		});
	};

	return (
		<div>
			<div className=' shadow-lg py-6 rounded gap-3'>
				<table className='table'>
					{/* head */}
					<thead>
						<tr className='bg-slate-900 text-white text-lg font-semibold'>
							<th>#</th>
							<th>Image</th>
							<th>Class Name</th>
							<th>Instructor Name</th>
							<th>Instructor Email</th>
							<th>Available Seats</th>
							<th>Price</th>
							<th className='flex justify-center'>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody className='overflow-x-hidden'>
						{/* row 1 */}
						{classes.map((item, idx) => (
							<>
								<tr>
									<td>{idx + 1}</td>
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
									<td className='flex items-center mt-3 gap-2'>
										<button className='btn btn-xs'>
											{item.status ? item.status : 'pending'}
										</button>
									</td>
									<th>
										<button
											disabled={item?.status}
											onClick={() => handleApproveStatus(item)}
											className='btn btn-ghost btn-xs bg-blue-800 text-white'>
											Approve
										</button>
										<button
											className='btn btn-ghost btn-xs w-full my-2'
											onClick={() => handleDenyStatus(item)}
											disabled={item?.status}>
											Deny
										</button>
										<dialog id='my_modal_3' className='modal'>
											<form method='dialog' className='modal-box'>
												<button
													htmlFor='my-modal-3'
													className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
													✕
												</button>
												<h3 className='font-bold text-lg'>Hello!</h3>
												<p className='py-4'>
													Press ESC key or click on ✕ button to close
												</p>
											</form>
										</dialog>
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
