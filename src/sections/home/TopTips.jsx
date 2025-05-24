import { useEffect, useState } from "react";
import TopTipCard from "../../components/cards/TopTipCard";

const TopTips = () => {
	const [topTipsData, setTopTipsData] = useState([]);
	useEffect(() => {
		fetch("https://a10-gardeneon-server.vercel.app/tips/top-6")
			.then((res) => res.json())
			.then((data) => setTopTipsData(data));
	}, []);
	return (
		<section className="max-w-sm lg:max-w-4xl xl:max-w-5xl 2xl:max-w-[96rem] mx-auto mt-16 space-y-12">
			<h2 className="text-4xl font-bold text-center">
				💠{" "}
				<span className="bg-gradient-to-r from-green-700 via-dark to-green-700 bg-clip-text text-transparent">
					Top Tips
				</span>
			</h2>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
				{topTipsData.map((topTipData) => (
					<TopTipCard
						key={topTipData._id}
						data={topTipData}
					/>
				))}
			</div>
		</section>
	);
};

export default TopTips;
