import GardenerCard from "../components/cards/GardenerCard";
import { useEffect, useState } from "react";

const ExploreGardeners = () => {
	const [gardeners, setGardeners] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5100/gardeners")
			.then((res) => res.json())
			.then((data) => setGardeners(data));
	}, []);
	return (
		<main className="max-w-[96rem] mx-auto mt-16 space-y-12">
			<h2 className="text-4xl font-bold text-center">
				🧑🏻‍🌾{" "}
				<span className="bg-gradient-to-r from-green-700 via-dark to-green-700 bg-clip-text text-transparent">
					Explore Gardeners
				</span>
			</h2>
			<div className="grid grid-cols-4 gap-8">
				{gardeners.map((gardener) => (
					<GardenerCard
						key={gardener._id}
						data={gardener}
					/>
				))}
			</div>
		</main>
	);
};

export default ExploreGardeners;
