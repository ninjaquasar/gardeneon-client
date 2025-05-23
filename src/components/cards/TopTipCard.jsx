import { Link } from "react-router";

const TopTipCard = ({ data }) => {
	const { _id, image_url, title, category, difficulty, description } = data;
	return (
		<div className="border border-dark/10 bg-stone-50 rounded-3xl px-6 py-8 hover:shadow-lg hover:shadow-dark/10 transition-shadow duration-200 text-lg space-y-6">
			<div className="space-y-4">
				<img
					src={image_url}
					alt="Thumbnail Image"
					className="w-80 h-60 mx-auto object-cover object-center rounded-xl"
				/>
				<h4
					title="Title"
					className="text-2xl font-bold text-center"
				>
					{title}
				</h4>
			</div>
			<div className="flex justify-between">
				<p title="Category">{category}</p>
				<p title="Difficulty">{difficulty}</p>
			</div>
			<p title="Description">
				{description.slice(0, 50)}
				<span title="Read More">...</span>
			</p>
			<div className="text-center">
				<Link to={`/tip/${_id}`}>
					<button
						type="button"
						className="w-40 py-3 bg-primary text-light hover:bg-primary/90 text-xl font-bold rounded-xl cursor-pointer"
					>
						View More
					</button>
				</Link>
			</div>
		</div>
	);
};

export default TopTipCard;
