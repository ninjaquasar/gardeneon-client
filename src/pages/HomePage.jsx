import { JackInTheBox, Zoom } from "react-awesome-reveal";
import ActiveGardeners from "../sections/home/ActiveGardeners";
import Hero from "../sections/home/Hero";
import Testimonials from "../sections/home/Testimonials";
import TopGardenGears from "../sections/home/TopGardenGears";
import TopTips from "../sections/home/TopTips";
import Slogan from "../components/Slogan";

const HomePage = () => {
	return (
		<main>
			<Hero />
			<Slogan />
			<Zoom duration={600}>
				<ActiveGardeners />
			</Zoom>
			<TopTips />
			<JackInTheBox duration={750}>
				<Testimonials />
			</JackInTheBox>
			<Zoom duration={600}>
				<TopGardenGears />
			</Zoom>
		</main>
	);
};

export default HomePage;
