import { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { toast, Zoom } from "react-toastify";

const UpdateTipCard = () => {
	const tipsData = useLoaderData();
	const tipId = useParams().id;
	const tip = tipsData.find((tipData) => tipData._id === tipId);
	const { _id, title, plant_type, difficulty, description, category, image_url, visibility } =
		tip;
	const handleUpdate = (event) => {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form);
		const updatedTip = Object.fromEntries(formData.entries());
		// Update tip in database
		fetch(`http://localhost:5100/tips/update/${_id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(updatedTip),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged)
					toast.success("Tip updated successfully", {
						theme: "light",
						position: "top-left",
						autoClose: 2500,
						closeOnClick: true,
						hideProgressBar: false,
						draggable: true,
						pauseOnHover: false,
						pauseOnFocusLoss: false,
						transition: Zoom,
					});
			});
	};
	return (
		<div className="max-w-sm lg:max-w-3xl mx-auto p-8 rounded-4xl shadow-lg shadow-dark/10">
			<h2 className="text-4xl font-bold text-center uppercase text-primary">
				📝 Update Tip
			</h2>
			<form
				className="mt-8 space-y-4"
				onSubmit={handleUpdate}
			>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Title</span>
					<input
						type="text"
						name="title"
						defaultValue={title}
						className="p-2 bg-stone-50 border border-dark/20 rounded-lg focus:outline-none focus:border-primary caret-primary"
					/>
				</label>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Plant Type</span>
					<input
						type="text"
						name="plant_type"
						defaultValue={plant_type}
						className="p-2 bg-stone-50 border border-dark/20 rounded-lg focus:outline-none focus:border-primary caret-primary"
					/>
				</label>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Difficulty</span>
					<select
						name="difficulty"
						className="max-w-3xs bg-stone-50 border border-dark/20 rounded-md p-1"
						defaultValue={difficulty}
					>
						<option value="Easy">Easy</option>
						<option value="Medium">Medium</option>
						<option value="Hard">Hard</option>
					</select>
				</label>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Description</span>
					<textarea
						rows="5"
						name="description"
						defaultValue={description}
						className="p-2 bg-stone-50 border border-dark/20 rounded-lg focus:outline-none focus:border-primary caret-primary"
					/>
				</label>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Category</span>
					<select
						name="category"
						className="max-w-3xs bg-stone-50 border border-dark/20 rounded-md p-1"
						defaultValue={category}
					>
						<option value="None">None</option>
						<option value="Plant Care">Plant Care</option>
						<option value="Urban Gardening">Urban Gardening</option>
						<option value="Indoor Gardening">Indoor Gardening</option>
						<option value="Vertical Gardening">Vertical Gardening</option>
						<option value="Seasonal Gardening">Seasonal Gardening</option>
						<option value="Flower Gardening">Flower Gardening</option>
						<option value="Composting">Composting</option>
						<option value="Pest Control">Pest Control</option>
						<option value="Herbs & Edibles">Herbs & Edibles</option>
						<option value="Garden Design">Garden Design</option>
						<option value="DIY Projects">DIY Projects</option>
						<option value="Smart Gardening">Smart Gardening</option>
						<option value="Kids Gardening">Kids Gardening</option>
					</select>
				</label>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Image URL</span>
					<input
						type="url"
						name="image_url"
						defaultValue={image_url}
						className="p-2 bg-stone-50 border border-dark/20 rounded-lg focus:outline-none focus:border-primary caret-primary"
					/>
				</label>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Visibility</span>
					<select
						name="visibility"
						defaultValue={visibility}
						className="max-w-3xs bg-stone-50 border border-dark/20 rounded-md p-1"
					>
						<option selected>Public</option>
						<option>Hidden</option>
					</select>
				</label>
				<div className="text-center mt-8">
					<button
						type="submit"
						className="w-40 py-2 bg-primary text-light hover:bg-primary/90 text-2xl font-bold rounded-lg cursor-pointer"
					>
						Update
					</button>
				</div>
			</form>
		</div>
	);
};

export default UpdateTipCard;
