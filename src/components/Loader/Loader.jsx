import { CirclesWithBar } from 'react-loader-spinner';

const Loader = () => {
	return (
		<div className='flex justify-center items-center h-full mt-20'>
			<CirclesWithBar
				height='100'
				width='100'
				color='#4fa94d'
				wrapperStyle={{}}
				wrapperClass=''
				visible={true}
				outerCircleColor=''
				innerCircleColor=''
				barColor=''
				ariaLabel='circles-with-bar-loading'
			/>
		</div>
	);
};

export default Loader;
