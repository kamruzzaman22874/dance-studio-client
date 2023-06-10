import { useEffect, useState } from 'react';
import PopularClass from '../PopularClass/PopularClass';

const PopularClasses = () => {
	const [classes, setClasses] = useState([]);
	useEffect(() => {
		fetch('http://localhost:7000/classes')
			.then((res) => res.json())
			.then((data) => {
				setClasses(data);
			});
	}, []);
	return (
		<div className='grid md:grid-cols-3 gap-6 px-12'>
			{classes.map((item) => (
				<PopularClass key={item._id} item={item}></PopularClass>
			))}
		</div>
	);
};

export default PopularClasses;
