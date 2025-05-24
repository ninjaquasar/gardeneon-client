const TipsTableHead = () => {
	return (
		<div className="p-3 grid grid-cols-5 text-lg font-semibold text-stone-700">
			<h6>Image</h6>
			<h6 className="col-span-2">Title</h6>
			<h6>Category</h6>
			<h6>Actions</h6>
		</div>
	);
};

export default TipsTableHead;
