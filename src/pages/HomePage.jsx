import ActiveGardeners from "../sections/home/ActiveGardeners";
import Hero from "../sections/home/Hero";
import Testimonials from "../sections/home/Testimonials";
import TopTips from "../sections/home/TopTips";

const HomePage = () => {
	return (
		<main>
			<Hero />
			<ActiveGardeners />
			<TopTips />
			<Testimonials />
		</main>
	);
};

export default HomePage;
