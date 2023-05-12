import { Stats } from "../utils/enums";
import { SecStat } from "../utils/types";
import { useState } from "react";

type Props = {
  mainStat: Stats;
  setStatPriority: React.Dispatch<React.SetStateAction<Map<string, number>>>;
};

const StatPrior: React.FC<Props> = ({ mainStat, setStatPriority }) => {
  const [statSlots, setStatSlots] = useState<Map<string, number>>(() => {
    // Initialize the gearslots map
    
    return new Map<string, number>([
      ["HASTE_RATING", 0],
      ["CRIT_RATING", 0],
      ["MASTERY_RATING", 0],
      ["VERSATILITY", 0],
    ]);
  });

  const handleStatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedStatSlots = new Map(statSlots);
    updatedStatSlots.set(e.target.name, Number(e.target.value));
    setStatSlots(updatedStatSlots);
    setStatPriority(updatedStatSlots);
  };

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
            name="HASTE_RATING"
            onChange={(e) => handleStatChange(e)}
              type="number"
              className="w-10 text-center rounded-lg text-black"
            />
          </div>
          <div className="flex gap-1 ">
            <p>Crit</p>
            <input
            name="CRIT_RATING"
            onChange={(e) => handleStatChange(e)}
              type="number"
              className="w-10 text-center rounded-lg text-black"
            />
          </div>
          <div className="flex gap-1">
            <p>Versatility</p>
            <input
            name="VERSATILITY"
            onChange={(e) => handleStatChange(e)}
              type="number"
              className="w-10 text-center rounded-lg text-black"
            />
          </div>
          <div className="flex gap-1">
            <p>Mastery</p>
            <input
            name="MASTERY_RATING"
            onChange={(e) => handleStatChange(e)}
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
              onChange={(e) => handleStatChange(e)}
              name="HASTE_RATING"
              className="w-10 text-center rounded-lg text-black"
            />
          </div>
          <div className="flex gap-1 ">
            <p>Crit</p>
            <input
              min={2}
              max={5}
              name="CRIT_RATING"
              type="number"
              onChange={(e) => handleStatChange(e)}
              className="w-10 text-center rounded-lg text-black"
            />
          </div>
          <div className="flex gap-1">
            <p>Versatility</p>
            <input
              min={2}
              max={5}
              type="number"
              name="VERSATILITY"
              onChange={(e) => handleStatChange(e)}
              className="w-10 text-center rounded-lg text-black"
            />
          </div>
          <div className="flex gap-1">
            <p>Mastery</p>
            <input
              min={2}
              max={5}
              type="number"
              name="MASTERY_RATING"
              onChange={(e) => handleStatChange(e)}
              className="w-10 text-center rounded-lg text-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatPrior;
