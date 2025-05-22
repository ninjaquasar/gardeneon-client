import GardenerCard from "../../components/cards/GardenerCard";
import { useEffect, useState } from "react";

const ActiveGardeners = () => {
	const [activeGardeners, setActiveGardeners] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5100/gardeners/active")
			.then((res) => res.json())
			.then((data) => setActiveGardeners(data));
	}, []);
	return (
		<section className="max-w-7xl mx-auto mt-16 space-y-12">
			<h2 className="text-4xl font-bold text-center">
				🟢{" "}
				<span className="bg-gradient-to-r from-green-700 via-dark to-green-700 bg-clip-text text-transparent">
					Active Gardeners
				</span>
			</h2>
			<div className="grid grid-cols-3 gap-8">
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
