const PopularClass = ({ item }) => {
	const { image, classesName, instructorName, availableSeats, price } = item;
	return (
		<div className='rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 mt-24 font-serif'>
			
			<img
				src={image}
				alt=''
				className='object-cover object-center rounded w-full h-72 dark:bg-gray-500'
			/>
			<div className='p-3'>
				<div className='space-y-2'>
					<h1>Classes Name: {classesName}</h1>
					<h2>Instructor Name: {instructorName}</h2>
					<div className='flex justify-between mb-3'>
						<h2>Available Seat: {availableSeats}</h2>
						<h2>Price: ${price}</h2>
					</div>
				</div>
				<span className='mt-4'>
					<input
						className='border-b-2 bg-[#2B2A4C] hover:border-b-[#090580] hover:bg-orange-400 text-white cursor-pointer px-4 py-2 rounded'
						type='submit'
						value='submit'
					/>
				</span>
			</div>
		</div>
	);
};

export default PopularClass;
