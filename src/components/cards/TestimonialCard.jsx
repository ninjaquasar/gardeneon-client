import Quote from "../../assets/quote.png";

const TestimonialCard = ({ data }) => {
	const { image, name, designation, rating, title, description } = data;
	let ratingText = "";
	for (let i = 0; i < rating; i++) ratingText += "⭐️";
	return (
		<div className="bg-stone-50 border border-dark/10 rounded-3xl p-8 space-y-6 relative h-full">
			<img
				src={Quote}
				alt="Background Image"
				className="size-16 absolute left-2/3 top-1/4 lg:left-1/2 lg:top-2 lg:-translate-x-1/2 opacity-30"
			/>
			<div className="flex flex-col 2xl:flex-row gap-y-5 2xl:items-center justify-between">
				<div className="flex items-center gap-4">
					<img
						src={`https://randomuser.me/api/portraits/${image}.jpg`}
						alt="Client Image"
						className="size-18 object-cover object-center border-2 border-primary/75 rounded-full"
					/>
					<div>
						<h4 className="text-2xl font-bold">{name}</h4>
						<h6 className="text-lg font-medium text-stone-500">{designation}</h6>
					</div>
				</div>
				<h4 className="text-2xl">{ratingText}</h4>
			</div>
			<div className="space-y-3">
				<h4 className="text-2xl font-bold">{title}</h4>
				<p className="text-lg">
					<span className="text-xl font-medium pe-2">"</span>
					{description}
					<span className="text-xl font-medium ps-2">"</span>
				</p>
			</div>
		</div>
	);
};

export default TestimonialCard;
