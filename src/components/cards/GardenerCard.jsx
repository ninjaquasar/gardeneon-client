const GardenerCard = ({ data }) => {
	const { image, name, age, gender, experiences, total_shared_tips } = data;
	return (
		<div className="border border-dark/10 bg-stone-50 rounded-3xl px-6 py-8 hover:shadow-lg hover:shadow-dark/10 transition-shadow duration-200 text-lg">
			<div className="flex justify-center items-center gap-x-4 mb-6">
				<img
					src={image}
					alt="User Image"
					className="size-16 object-cover object-center rounded-full"
				/>
				<h4 className="text-2xl font-bold">{name}</h4>
			</div>
			<div className="space-y-1">
				<p>
					<span className="font-bold">Age:</span> {age}
				</p>
				<p>
					<span className="font-bold">Gender:</span> {gender}
				</p>
				<p>
					<span className="font-bold">Experiences:</span>
					<br />
					{experiences}
				</p>
				<p>
					<span className="font-bold">Total Shared Tips:</span> {total_shared_tips}
				</p>
			</div>
		</div>
	);
};

export default GardenerCard;
