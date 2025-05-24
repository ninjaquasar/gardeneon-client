import { Link } from "react-router";

const TipRow = ({ data }) => {
	const { _id, image_url, title, category } = data;
	return (
		<div className="p-3 grid grid-cols-5 items-center text-lg border-t border-t-dark/10">
			<div className="lg:size-24 2xl:size-20 overflow-hidden rounded-md">
				<img
					src={image_url}
					alt="Top 5 Plants for Apartment Gardening"
					className="size-full object-cover object-center rounded-md hover:scale-115 transition-transform"
				/>
			</div>
			<p className="col-span-2">{title}</p>
			<p>{category}</p>
			<Link to={`/tip/${_id}`}>
				<button
					type="button"
					className="px-4 py-2 bg-primary text-light hover:bg-primary/90 font-medium rounded-lg cursor-pointer"
				>
					View More
				</button>
			</Link>
		</div>
	);
};

export default TipRow;
