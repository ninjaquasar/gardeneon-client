import ActiveGardeners from "../sections/home/ActiveGardeners";
import Hero from "../sections/home/Hero";
import Testimonials from "../sections/home/Testimonials";
import TopGardenGears from "../sections/home/TopGardenGears";
import TopTips from "../sections/home/TopTips";

const HomePage = () => {
	return (
		<main>
			<Hero />
			<ActiveGardeners />
			<TopTips />
			<Testimonials />
			<TopGardenGears />
		</main>
	);
};

export default HomePage;
