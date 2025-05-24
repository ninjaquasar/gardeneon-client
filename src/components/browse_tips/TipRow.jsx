import { Link } from "react-router";
import Swal from "sweetalert2";

const TipRow = ({ data }) => {
	const { _id, image_url, title, category } = data;
	const handleDelete = (id) => {
		Swal.fire({
			icon: "warning",
			title: "Are you sure?",
			text: "You want to delete the tip? It's irreversible!",
			iconColor: "#ffa500",
			showCancelButton: true,
			cancelButtonColor: "#dc143c",
			cancelButtonText: "Nope",
			confirmButtonColor: "var(--color-primary)",
			confirmButtonText: "Yes, Delete",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5100/tips/delete/${_id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.acknowledged) {
							Swal.fire({
								icon: "info",
								title: "Deleted",
								text: "The tip is deleted successfully.",
								confirmButtonText: "Okay",
								confirmButtonColor: "var(--color-primary)",
							});
						}
					});
			}
		});
	};
	return (
		<div className="p-3 grid grid-cols-5 items-center text-lg border-t border-t-dark/10">
			<div className="size-24 overflow-hidden rounded-md">
				<img
					src={image_url}
					alt="Top 5 Plants for Apartment Gardening"
					className="size-full object-cover object-center rounded-md hover:scale-115 transition-transform"
				/>
			</div>
			<p className="col-span-2">{title}</p>
			<p>{category}</p>
			<div className="flex gap-x-2">
				<Link to={`/tip/details/${_id}`}>
					<button
						type="button"
						className="p-2 bg-primary border border-primary text-light font-medium rounded-lg cursor-pointer"
					>
						👁️
					</button>
				</Link>
				<button
					type="button"
					className="p-2 bg-primary border border-primary text-light font-medium rounded-lg cursor-pointer"
					onClick={() => handleDelete(_id)}
				>
					🗑️
				</button>
				<Link to={`/tip/update/${_id}`}>
					<button
						type="button"
						className="p-2 bg-primary border border-primary text-light font-medium rounded-lg cursor-pointer"
					>
						📝
					</button>
				</Link>
			</div>
		</div>
	);
};

export default TipRow;
