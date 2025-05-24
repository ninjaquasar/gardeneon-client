import { Zoom } from "react-awesome-reveal";
import TipsTable from "../components/browse_tips/TipsTable";

const BrowseTipsPage = () => {
	return (
		<main className="lg:max-w-4xl xl:max-w-5xl 2xl:max-w-[96rem] mx-auto pt-12 space-y-16">
			<h2 className="text-3xl md:text-4xl font-bold text-center uppercase text-primary">
				📖 Browse Tips
			</h2>
			<Zoom duration={700}>
				<TipsTable />
			</Zoom>
		</main>
	);
};

export default BrowseTipsPage;
