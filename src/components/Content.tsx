import { useState } from "react";
import { Stats } from "../utils/enums";
import DungeonRaidSelect from "./DungeonRaidSelect";
import GearSelect from "./GearSelect";
import Result from "./Result";
import StatPrior from "./StatPrior";
import TalentSpecSelection from "./TalentSpecSelection";

const Content = () => {
  const [mainStat, setMainStat] = useState<Stats>(Stats.Intellect);
  return (
    <div className="flex flex-grow flex-col w-full">
      <TalentSpecSelection mainStat={mainStat} setMainStat={setMainStat} />
      <div
        className="flex flex-grow w-full
      "
      >
        <div className="flex flex-col w-1/3">
          <StatPrior mainStat={mainStat} />
          <DungeonRaidSelect />
        </div>
        <div className="flex flex-col w-1/3">
          <GearSelect />
        </div>
        <div className="flex flex-col w-1/3">
          <Result />
        </div>
      </div>
    </div>
  );
};

export default Content;
