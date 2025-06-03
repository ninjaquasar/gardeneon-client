import { useState } from "react";

const Filter = ({ setFilteredTips }) => {
	const [difficulty, setDifficulty] = useState("");
	const handleFilter = (event) => {
		const filterValue = event.target.value;
		setDifficulty(filterValue);
		fetch(
			filterValue
				? `http://localhost:5100/tips?difficulty=${filterValue}`
				: "http://localhost:5100/tips",
		)
			.then((res) => res.json())
			.then((data) => setFilteredTips(data));
	};
	return (
		<label className="flex items-center gap-x-2 mb-8">
			<span className="font-medium">Difficulty</span>
			<select
				name="difficulty"
				value={difficulty}
				onChange={handleFilter}
				className="w-28 dark:bg-stone-800 border border-dark/20 dark:border-light/20 rounded-md p-1"
			>
				<option value="">All</option>
				<option value="Easy">Easy</option>
				<option value="Medium">Medium</option>
				<option value="Hard">Hard</option>
			</select>
		</label>
	);
};

export default Filter;
