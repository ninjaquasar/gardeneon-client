import GardenerCard from "../../components/cards/GardenerCard";
import { useEffect, useState } from "react";

const ActiveGardeners = () => {
	const [activeGardeners, setActiveGardeners] = useState([]);
	useEffect(() => {
		fetch("https://a10-gardeneon-server.vercel.app/gardeners/active")
			.then((res) => res.json())
			.then((data) => setActiveGardeners(data));
	}, []);
	return (
		<section className="max-w-sm lg:max-w-4xl xl:max-w-5xl 2xl:max-w-[96rem] mx-auto mt-16 space-y-12">
			<h2 className="text-3xl md:text-4xl font-bold text-center">
				🟢{" "}
				<span className="bg-gradient-to-r from-green-700 via-dark to-green-700 bg-clip-text text-transparent">
					Active Gardeners
				</span>
			</h2>
			<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 2xl:gap-8">
				{activeGardeners.map((activeGardener) => (
					<GardenerCard
						key={activeGardener._id}
						data={activeGardener}
					/>
				))}
			</div>
		</section>
	);
};

export default ActiveGardeners;
