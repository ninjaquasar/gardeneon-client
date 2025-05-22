const ShareTipCard = () => {
	return (
		<div className="max-w-4xl mx-auto bg-stone-50 p-8 rounded-4xl shadow-lg shadow-dark/10">
			<h2 className="text-4xl font-bold text-center uppercase text-primary">
				💡 Share A Garden Tip
			</h2>
			<form className="max-w-xl mx-auto mt-12 space-y-4">
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Title</span>
					<input
						type="text"
						className="p-2 bg-stone-50 border border-dark/20 rounded-lg focus:outline-none focus:border-primary caret-primary"
						placeholder="Tip Post Title"
					/>
				</label>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Plant Type</span>
					<input
						type="text"
						className="p-2 bg-stone-50 border border-dark/20 rounded-lg focus:outline-none focus:border-primary caret-primary"
						placeholder="Plant Type/Topic"
					/>
				</label>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Difficulty</span>
					<select className="max-w-3xs border border-dark/20 rounded-md p-1">
						<option>Easy</option>
						<option selected>Medium</option>
						<option>Hard</option>
					</select>
				</label>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Description</span>
					<textarea
						rows="5"
						className="p-2 bg-stone-50 border border-dark/20 rounded-lg focus:outline-none focus:border-primary caret-primary"
						placeholder="Tip Description"
					/>
				</label>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Category</span>
					<select className="max-w-3xs border border-dark/20 rounded-md p-1">
						<option selected>None</option>
						<option>Plant Care</option>
						<option>Urban Gardening</option>
						<option>Indoor Gardening</option>
						<option>Seasonal Gardening</option>
						<option>Flower Gardening</option>
						<option>Composting</option>
						<option>Pest Control</option>
						<option>Herbs & Edibles</option>
						<option>Garden Design</option>
						<option>DIY Projects</option>
						<option>Smart Gardening</option>
						<option>Kids Gardening</option>
					</select>
				</label>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Image URL</span>
					<input
						type="url"
						className="p-2 bg-stone-50 border border-dark/20 rounded-lg focus:outline-none focus:border-primary caret-primary"
						placeholder="Tip Post Thumbnail URL"
					/>
				</label>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Visibility</span>
					<select className="max-w-3xs border border-dark/20 rounded-md p-1">
						<option selected>Public</option>
						<option>Hidden</option>
					</select>
				</label>
				<div className="text-center mt-8">
					<button
						type="submit"
						className="w-60 py-3 bg-primary text-light hover:bg-primary/90 text-2xl font-bold rounded-xl cursor-pointer"
					>
						Share Tip
					</button>
				</div>
			</form>
		</div>
	);
};

export default ShareTipCard;
