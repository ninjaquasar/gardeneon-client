import { useLoaderData, useParams } from "react-router";

const TipDetailsLayout = () => {
	const tipsData = useLoaderData();
	const tipId = useParams().id;
	const tip = tipsData.find((tipData) => tipData._id === tipId);
	const { image_url, title, category, plant_type, difficulty, description } = tip;
	return (
		<section className="grid grid-cols-12 gap-6 max-w-4xl mx-auto">
			<div className="col-span-4 bg-gradient-to-br from-green-500/75 via-primary/75 to-green-800/75 p-px rounded-3xl">
				<img
					src={image_url}
					alt="Thumbnail Image"
					title="Thumbnail"
					className="w-full aspect-square object-cover object-center rounded-3xl"
				/>
			</div>
			<div className="flex flex-col justify-center gap-y-6 col-span-8 border border-dark/10 bg-stone-50 rounded-3xl p-6">
				<h3
					title="Title"
					className="text-3xl font-bold"
				>
					{title}
				</h3>
				<div className="flex justify-between gap-y-2 text-lg font-medium">
					<p title="Category">🏷️ {category}</p>
					<p title="Plant Type">🌱 {plant_type}</p>
					<p title="Difficulty">🎚️ {difficulty}</p>
				</div>
				<p className="text-lg">{description}</p>
			</div>
		</section>
	);
};

export default TipDetailsLayout;
