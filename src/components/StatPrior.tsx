import { Stats } from "../utils/enums";
import { SecStat } from "../utils/types";

type Props = {
  mainStat: Stats;
};

const StatPrior: React.FC<Props> = ({ mainStat }) => {
  return (
    <div className="flex flex-col flex-grow">
      <p className="flex justify-center">Stat Priorities</p>
      <div className="flex justify-between flex-grow">
        <div className="flex flex-col flex-grow items-center gap-2">
          <p>Raidbots:</p>
          <div className="flex gap-1 ">
            {Stats[mainStat]}
            <input
              type="number"
              className="w-10 text-center rounded-lg text-black"
            />
          </div>
          <div className="flex gap-1 ">
            <p>Haste</p>
            <input
              type="number"
              className="w-10 text-center rounded-lg text-black"
            />
          </div>
          <div className="flex gap-1 ">
            <p>Crit</p>
            <input
              type="number"
              className="w-10 text-center rounded-lg text-black"
            />
          </div>
          <div className="flex gap-1">
            <p>Versatility</p>
            <input
              type="number"
              className="w-10 text-center rounded-lg text-black"
            />
          </div>
          <div className="flex gap-1">
            <p>Mastery</p>
            <input
              type="number"
              className="w-10 text-center rounded-lg text-black"
            />
          </div>
        </div>
        <div className="flex flex-col flex-grow items-center gap-2">
          <p>Static Prior:</p>
          <div className="flex gap-1 ">
            {Stats[mainStat]}
            <input
              type="number"
              className="w-10 text-center rounded-lg text-black"
              value="1"
              disabled
            />
          </div>
          <div className="flex gap-1 ">
            <p>Haste</p>
            <input
              min={2}
              max={5}
              type="number"
              className="w-10 text-center rounded-lg text-black"
            />
          </div>
          <div className="flex gap-1 ">
            <p>Crit</p>
            <input
              min={2}
              max={5}
              type="number"
              className="w-10 text-center rounded-lg text-black"
            />
          </div>
          <div className="flex gap-1">
            <p>Versatility</p>
            <input
              min={2}
              max={5}
              type="number"
              className="w-10 text-center rounded-lg text-black"
            />
          </div>
          <div className="flex gap-1">
            <p>Mastery</p>
            <input
              min={2}
              max={5}
              type="number"
              className="w-10 text-center rounded-lg text-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatPrior;
