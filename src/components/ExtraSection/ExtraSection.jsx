import team1 from '../../assets/images/team1.jpg';
import team2 from '../../assets/images/team2.jpg';
import team3 from '../../assets/images/team3.jpg';

const ExtraSection = () => {
	return (
		<section className='py-10 bg-white sm:py-16 lg:py-24 w-full font-mono'>
			<div className='px-4 w-full  lg:px-8  bg-yellow-400 p-4'>
				<div className='max-w-2xl mx-auto text-center'>
					<h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl'>
						We make you want to dance...right now!
					</h2>
					<p className='max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600'>
						THE RENOWNED DANCERS OF DIFFERENT GENRES
					</p>
				</div>

				<div className='grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12'>
					<div>
						<a href='#' title='' className='block aspect-w-4 aspect-h-3'>
							<img
								className='object-cover w-3/4 h-full rounded-full'
								src={team1}
								alt=''
							/>
						</a>
						<span className='inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9'>
							<h1>Bobbie Jackson</h1>
						</span>
						<p className='mt-6 text-xl font-semibold'>
							<a href='#' title='' className='text-black'>
								<p>SALSA MUSIC</p>
							</a>
						</p>
						<p className='mt-4 text-gray-600'>
							Mirum est notare quam littera gothica, quam putamus.
						</p>
						<div className='h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed'></div>
					</div>

					<div>
						<a href='#' title='' className='block aspect-w-4 aspect-h-3'>
							<img
								className='object-cover w-3/4 h-full rounded-full'
								src={team2}
								alt=''
							/>
						</a>
						<span className='inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9'>
							<h2>Sylvester Gonzales</h2>
						</span>
						<p className='mt-6 text-xl font-semibold'>
							<a href='#' title='' className='text-black'>
								<p>HIP HOP SPECIALIST</p>
							</a>
						</p>
						<p className='mt-4 text-gray-600'>
							Mirum est notare quam littera gothica, quam putamus.
						</p>
						<div className='h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed'></div>
					</div>

					<div>
						<a href='#' title='' className='block aspect-w-4 aspect-h-3'>
							<img
								className='object-cover w-3/4 h-full rounded-full'
								src={team3}
								alt=''
							/>
						</a>
						<span className='inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9'>
							<h2>Inez Hernandez</h2>
						</span>
						<p className='mt-6 text-xl font-semibold'>
							<a href='#' title='' className='text-black'>
								SALSA DANCE
							</a>
						</p>
						<p className='mt-4 text-gray-600'>
							Mirum est notare quam littera gothica, quam putamus.
						</p>
						<div className='h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed'></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ExtraSection;
