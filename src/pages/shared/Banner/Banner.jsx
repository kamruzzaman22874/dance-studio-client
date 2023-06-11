import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import slide1 from "../../../assets/images/slider1.jpg";
import slide4 from "../../../assets/images/slider4.jpg";
import slide3 from "../../../assets/images/slider3.jpg";
import { Fade } from "react-awesome-reveal";
const Banner = () => {
  return (
    <>
      <div className="pt-16 h-screen">
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
          className="mySwiper"
        >
          <SwiperSlide className="inset-0 bg-gradient-to-tl w-full  from-black to-slate-600">
            <img
              className="w-full h-screen bg-slate-600 bg-opacity-70 mix-blend-overlay"
              src={slide1}
              alt=""
            />
            <div className="absolute md:mt-0 -mt-72 left-28 md:top-48 md:left-96 text-white md:text-6xl  bg-transparent text-center font-semibold">
              <Fade direction="left">
                <p className="uppercase">We'll teach you to</p>
              </Fade>
              <Fade direction="right">
                <h2 className="md:text-6xl uppercase">Dance</h2>
              </Fade>
            </div>
          </SwiperSlide>
          <SwiperSlide className="inset-0 bg-gradient-to-tl w-full  from-black to-slate-600">
            <img
              className="w-full h-screen bg-slate-600 bg-opacity-70 mix-blend-overlay"
              src={slide3}
              alt=""
            />
            <div className="absolute md:mt-0 -mt-72  left-28 md:top-48 md:left-96 text-white md:text-6xl  bg-transparent text-center font-semibold">
              <Fade direction="left">
                <p className="uppercase">We'll teach you to</p>
              </Fade>
              <Fade direction="right">
                <h2 className="md:text-6xl uppercase">Dance</h2>
              </Fade>
            </div>
          </SwiperSlide>
          <SwiperSlide className="inset-0 bg-gradient-to-tl w-full  from-black to-slate-600">
            <img
              className="w-full h-screen  bg-slate-700 bg-opacity-70 mix-blend-overlay"
              src={slide4}
              alt=""
            />
            <div className="absolute md:mt-0 -mt-72 left-28 md:top-48 md:left-96 text-white md:text-6xl bg-transparent text-center font-semibold">
              <Fade direction="left">
                <p className="uppercase text-blur">We'll teach you to</p>
              </Fade>
              <Fade direction="right">
                <h2 className="md:text-6xl uppercase">Dance</h2>
              </Fade>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
