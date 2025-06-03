import TipRow from "./TipRow";
import TipsTableHead from "./TipsTableHead";

const TipsTable = ({ data }) => {
	return (
		<div className="flex flex-col border-y border-y-dark/10 dark:border-y-light/10">
			<TipsTableHead />
			{data.map((tip) => (
				<TipRow
					key={tip._id}
					data={tip}
				/>
			))}
		</div>
	);
};

export default TipsTable;
