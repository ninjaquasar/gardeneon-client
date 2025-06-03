import { Zoom } from "react-awesome-reveal";
import TipsTable from "../components/browse_tips/TipsTable";
import Filter from "../components/browse_tips/Filter";
import { useEffect, useState } from "react";

const BrowseTipsPage = () => {
	const [filteredTips, setFilteredTips] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5100/tips")
			.then((res) => res.json())
			.then((data) => setFilteredTips(data));
	}, []);
	return (
		<main className="lg:max-w-4xl xl:max-w-5xl 2xl:max-w-[96rem] mx-auto pt-12">
			<h2 className="text-3xl md:text-4xl font-bold text-center uppercase text-primary mb-12">
				📖 Browse Tips
			</h2>
			<Filter setFilteredTips={setFilteredTips} />
			<Zoom duration={700}>
				<TipsTable data={filteredTips} />
			</Zoom>
		</main>
	);
};

export default BrowseTipsPage;
