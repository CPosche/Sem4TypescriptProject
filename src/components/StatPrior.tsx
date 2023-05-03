import { Stats } from "../utils/enums";
import { SecStat } from "../utils/types";

type Props = {
  mainStat: Stats;
};

const StatPrior: React.FC<Props> = ({ mainStat }) => {
  return <div className="flex justify-end flex-grow">StatPrior</div>;
};

export default StatPrior;
