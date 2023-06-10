import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import slide1 from '../../../assets/images/slider1.jpg';
import slide4 from '../../../assets/images/slider4.jpg';
import slide3 from '../../../assets/images/slider3.jpg';
const Banner = () => {
	return (
		<>
			<div className='pt-16 h-screen'>
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Autoplay, Pagination, Navigation]}
					className='mySwiper'>
					<SwiperSlide>
						<img className='h-screen w-full' src={slide1} alt='' />
						<div className='absolute top-1/2 right-60 text-white text-6xl  bg-transparent text-center'>
							<p className='uppercase'>We'll teach you to</p>
							<h2 className='text-6xl uppercase'>Dance</h2>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<img className='h-screen w-full' src={slide3} alt='' />
						<div className='absolute top-1/2 right-60 text-white text-6xl  bg-transparent text-center'>
							<p className='uppercase'>We'll teach you to</p>
							<h2 className='text-6xl uppercase'>Dance</h2>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<img className='h-screen w-full ' src={slide4} alt='' />
						<div className='absolute top-1/2 right-60 text-white text-6xl bg-transparent text-center'>
							<p className='uppercase'>We'll teach you to</p>
							<h2 className='text-6xl uppercase'>Dance</h2>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
};

export default Banner;
