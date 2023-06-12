import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import useAuth from '../../../hook/useAuth';
const img_hosting_token = import.meta.env.VITE_image_upload_token;
console.log(img_hosting_token);
const AddClass = () => {
	const {user} = useAuth()
	const [axiosSecure] = useAxiosSecure();
	const { register, handleSubmit } = useForm();
	const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
	console.log(img_hosting_url);
	const onSubmit = (data) => {
		const formData = new FormData();
		formData.append('image', data.image[0]);
		fetch(img_hosting_url, {
			method: 'POST',
			body: formData,
		})
			.then((res) => res.json())
			.then((imgResponse) => {
				console.log(imgResponse);
				if (imgResponse.success) {
					const imgUrl = imgResponse.data.url;
					// const { classesName, instructorName, availableSeats, price } = data;
					const newItem = {
						classesName: data.classesName,
						instructorName: data.instructorName,
						instructorEmail: data.instructorEmail,
						availableSeats: parseInt(data.availableSeats),
						price: parseFloat(data.price),
						enrolledStudent: parseInt(0),
						image: imgUrl,
					};

					axiosSecure.post('/classes', newItem).then((data) => {
						if (data.data.insertedId) {
							Swal.fire({
								position: 'top-end',
								icon: 'success',
								title: 'Class added successfully',
								showConfirmButton: false,
								timer: 1500,
							});
						}
					});
				}
			});
	};
	return (
		<section className='p-6 dark:bg-gray-800 dark:text-gray-50 rounded'>
			<h2 className='mb-6 text-2xl font-mono'>
				<span className='border-b-4 border-b-[#090580]'>Add</span> Classes
			</h2>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='container flex flex-col mx-auto ng-untouched ng-pristine ng-valid bg-[#116A7B] rounded'>
				<fieldset className='grid grid-cols-4 gap-6 p-6 rounded-md shadow-lg '>
					<div className='grid grid-cols-6 gap-4 col-span-full lg:col-span-3'>
						<div className='col-span-full sm:col-span-3'>
							<label className='text-md text-white'>Class Name</label>
							<input
								placeholder='class name'
								{...register('classesName')}
								className='w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
							/>
						</div>
						<div className='col-span-full sm:col-span-3'>
							<label className='text-md text-white'>Image</label>
							<input
								type='file'
								{...register('image', { required: true })}
								className='w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
							/>
						</div>
						<div className='col-span-full sm:col-span-3'>
							<label className='text-md text-white'>Instructor Name</label>
							<input
								defaultValue={user?.displayName}
								readOnly
								placeholder='instructor name'
								{...register('instructorName')}
								className='w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
							/>
						</div>
						<div className='col-span-full sm:col-span-3'>
							<label className='text-md text-white'>Instructor Email</label>
							<input
								defaultValue={user?.email}
								readOnly
								{...register('instructorEmail')}
								placeholder='Instructor Email'
								className='w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
							/>
						</div>
						<div className='col-span-full sm:col-span-3'>
							<label className='text-md text-white'>Available Seats</label>
							<input
								type='number'
								{...register('availableSeats')}
								placeholder='available seats'
								className='w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
							/>
						</div>
						<div className='col-span-full sm:col-span-3'>
							<label className='text-md text-white'>Price</label>
							<input
								type='number'
								{...register('price')}
								placeholder='Price'
								className='w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
							/>
						</div>
						<input
							className='px-4 py-2 hover:bg-[#ECE5C7] cursor-pointer text-white hover:text-black rounded border-b-4 hover:border-b-[#090580] font-semibold bg-[#090580]'
							type='submit'
							value='Submit'
						/>
					</div>
				</fieldset>
			</form>
		</section>
	);
};

export default AddClass;
