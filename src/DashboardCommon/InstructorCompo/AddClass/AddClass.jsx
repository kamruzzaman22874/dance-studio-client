import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hook/useAxiosSecure';
const img_hosting_token = import.meta.env.VITE_image_upload_token;
console.log(img_hosting_token);
const AddClass = () => {
	const [axiosSecure] = useAxiosSecure();
	const { register, handleSubmit } = useForm();
	const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
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
						availableSeats: data.availableSeats,
						price: parseFloat(data.price),
						image: imgUrl,
                    };
                   
                    axiosSecure.post('/classes', newItem)
                        .then((data) => {
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
                }
			});
            console.log(data);
	};
	return (
		<section className='p-6 dark:bg-gray-800 dark:text-gray-50 rounded'>
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
								placeholder='instructor name'
								{...register('instructorName')}
								className='w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900'
							/>
						</div>
						<div className='col-span-full sm:col-span-3'>
							<label className='text-md text-white'>Instructor Email</label>
							<input
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
							className='px-4 py-2 hover:bg-[#ECE5C7] cursor-pointer text-white hover:text-black rounded border-b-4 hover:border-b-orange-500 font-semibold bg-[#090580]'
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
