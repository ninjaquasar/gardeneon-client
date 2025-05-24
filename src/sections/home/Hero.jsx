import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SlideImage1 from "../../assets/hero-1.jpg";
import SlideImage2 from "../../assets/hero-2.jpg";
import SlideImage3 from "../../assets/hero-3.jpg";
import { Autoplay, Pagination } from "swiper/modules";

const Hero = () => {
	return (
		<section>
			<Swiper
				modules={[Autoplay, Pagination]}
				autoplay={{
					delay: 5000,
				}}
				pagination={{
					clickable: true,
				}}
			>
				<SwiperSlide>
					<div className="relative w-full h-[85vh]">
						<img
							src={SlideImage1}
							alt="Urban Gardening"
							className="w-full h-full object-cover object-center"
						/>
						<h1 className="w-max absolute top-8 left-1/2 -translate-x-1/2 text-5xl font-bold text-dark">
							Green isn't just a Color, it's a Vibe
						</h1>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative w-full h-[85vh]">
						<img
							src={SlideImage2}
							alt="Community Gardening"
							className="w-full h-full object-cover object-center"
						/>
						<h1 className="w-max absolute top-8 left-1/2 -translate-x-1/2 text-5xl font-bold text-dark">
							Grow Together and Glow Forever
						</h1>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative w-full h-[85vh]">
						<img
							src={SlideImage3}
							alt="Gardening Plants"
							className="w-full h-full object-cover object-center"
						/>
						<h1 className="w-max absolute top-8 left-1/2 -translate-x-1/2 text-5xl font-bold text-light">
							Plant the Seed and Join the Story.
						</h1>
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Hero;
