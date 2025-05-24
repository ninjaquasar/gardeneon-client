import { toast, Zoom } from "react-toastify";

const ShareTipCard = () => {
	const handleSubmit = (event) => {
		// Avoid page reload
		event.preventDefault();
		// Fetch submission data
		const form = event.target;
		const formData = new FormData(form);
		const tipData = Object.fromEntries(formData.entries());
		// Send data to server
		fetch("https://a10-gardeneon-server.vercel.app/tips/create", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(tipData),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged)
					toast.success("Tip post shared successfully.", {
						theme: "light",
						position: "top-left",
						autoClose: 4000,
						closeOnClick: true,
						hideProgressBar: false,
						draggable: true,
						pauseOnHover: false,
						pauseOnFocusLoss: false,
						transition: Zoom,
					});
				else
					toast.error("Something went wrong.", {
						theme: "light",
						position: "top-left",
						autoClose: 3500,
						closeOnClick: true,
						hideProgressBar: true,
						draggable: true,
						pauseOnHover: false,
						pauseOnFocusLoss: false,
						transition: Zoom,
					});
			});
	};
	return (
		<div className="max-w-sm lg:max-w-4xl mx-auto bg-stone-50 p-8 rounded-4xl shadow-lg shadow-dark/10">
			<h2 className="text-3xl md:text-4xl font-bold text-center uppercase text-primary">
				💡 Share A Garden Tip
			</h2>
			<form
				className="max-w-xs lg:max-w-xl mx-auto mt-12 space-y-4"
				onSubmit={handleSubmit}
			>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Title</span>
					<input
						type="text"
						name="title"
						className="p-2 bg-stone-50 border border-dark/20 rounded-lg focus:outline-none focus:border-primary caret-primary"
						placeholder="Tip Post Title"
					/>
				</label>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Plant Type</span>
					<input
						type="text"
						name="plant_type"
						className="p-2 bg-stone-50 border border-dark/20 rounded-lg focus:outline-none focus:border-primary caret-primary"
						placeholder="Plant Type/Topic"
					/>
				</label>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Difficulty</span>
					<select
						name="difficulty"
						className="max-w-3xs border border-dark/20 rounded-md p-1"
					>
						<option>Easy</option>
						<option selected>Medium</option>
						<option>Hard</option>
					</select>
				</label>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Description</span>
					<textarea
						rows="5"
						name="description"
						className="p-2 bg-stone-50 border border-dark/20 rounded-lg focus:outline-none focus:border-primary caret-primary"
						placeholder="Tip Description"
					/>
				</label>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Category</span>
					<select
						name="category"
						className="max-w-3xs border border-dark/20 rounded-md p-1"
					>
						<option selected>None</option>
						<option>Plant Care</option>
						<option>Urban Gardening</option>
						<option>Indoor Gardening</option>
						<option>Vertical Gardening</option>
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
						name="image_url"
						className="p-2 bg-stone-50 border border-dark/20 rounded-lg focus:outline-none focus:border-primary caret-primary"
						placeholder="Tip Post Thumbnail URL"
					/>
				</label>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Visibility</span>
					<select
						name="visibility"
						className="max-w-3xs border border-dark/20 rounded-md p-1"
					>
						<option selected>Public</option>
						<option>Hidden</option>
					</select>
				</label>
				<div className="text-center mt-8">
					<button
						type="submit"
						className="w-40 md:w-60 py-3 bg-primary text-light hover:bg-primary/90 text-xl lg:text-2xl font-bold rounded-xl cursor-pointer"
					>
						Share Tip
					</button>
				</div>
			</form>
		</div>
	);
};

export default ShareTipCard;
