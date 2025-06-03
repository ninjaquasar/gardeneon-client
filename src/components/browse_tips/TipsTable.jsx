import { useLoaderData } from "react-router";
import TipRow from "./TipRow";
import TipsTableHead from "./TipsTableHead";

const TipsTable = () => {
	const tipsData = useLoaderData();
	return (
		<div className="flex flex-col border-y border-y-dark/10 dark:border-y-light/10">
			<TipsTableHead />
			{tipsData.map((tipData) => (
				<TipRow
					key={tipData._id}
					data={tipData}
				/>
			))}
		</div>
	);
};

export default TipsTable;
