import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useEffect, useState } from "react";
import TestimonialCard from "../../components/cards/TestimonialCard";

const Testimonials = () => {
	const [testimonials, setTestimonials] = useState([]);
	useEffect(() => {
		fetch("https://a10-gardeneon-server.vercel.app/testimonials")
			.then((res) => res.json())
			.then((data) => setTestimonials(data));
	}, []);
	return (
		<section className="max-w-sm lg:max-w-4xl xl:max-w-5xl 2xl:max-w-[96rem] mx-auto mt-28 space-y-12">
			<h2 className="text-3xl md:text-4xl font-bold text-center">
				🗣️{" "}
				<span className="bg-gradient-to-r from-green-700 via-dark dark:via-green-200 to-green-700 bg-clip-text text-transparent">
					Hear From The Community
				</span>
			</h2>
			<Swiper
				modules={[Pagination]}
				slidesPerView={1}
				slidesPerGroup={1}
				breakpoints={{
					1024: {
						slidesPerView: 2,
						slidesPerGroup: 2,
						spaceBetween: 80,
					},
					1280: {
						slidesPerView: 2,
						slidesPerGroup: 2,
						spaceBetween: 96,
					},
				}}
				pagination={{
					enabled: true,
					clickable: true,
				}}
			>
				{testimonials.map((testimonial) => (
					<SwiperSlide
						key={testimonial._id}
						className="!h-auto"
					>
						<TestimonialCard data={testimonial} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Testimonials;
