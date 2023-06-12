import { useEffect, useState } from 'react';
import PopularClass from '../PopularClass/PopularClass';

const PopularClasses = () => {
	const [classes, setClasses] = useState([]);
	useEffect(() => {
		fetch('https://dance-studio-server-kamruzzaman22874.vercel.app/classes')
			.then((res) => res.json())
			.then((data) => {
				setClasses(data);
			});
	}, []);
	return (
		<div>
			<h2 className='mt-24 text-center md:text-3xl font-mono'><span className='border-b-4 border-b-purple-700'>Popular</span> Class</h2>
			<div className='grid md:grid-cols-3 gap-6 px-12'>
			{classes.map((item) => (
				<PopularClass key={item._id} item={item}></PopularClass>
			))}
		</div>
		</div>
	);
};

export default PopularClasses;
