import { useState } from "react";
import { Stats } from "../utils/enums";
import DungeonRaidSelect from "./DungeonRaidSelect";
import GearSelect from "./GearSelect";
import Result from "./Result";
import StatPrior from "./StatPrior";
import TalentSpecSelection from "./TalentSpecSelection";
import { Class, Spec } from "../utils/types";

const Content = () => {
  const [mainStat, setMainStat] = useState<Stats>(Stats.Intellect);
  const [selectedClass, setSelectedClass] = useState<Class>();
  const [selectedSpec, setSelectedSpec] = useState<Spec>();
  return (
    <div className="flex flex-grow flex-col w-full">
      <TalentSpecSelection
        mainStat={mainStat}
        setMainStat={setMainStat}
        selectedClass={selectedClass}
        setSelectedClass={setSelectedClass}
        selectedSpec={selectedSpec}
        setSelectedSpec={setSelectedSpec}
      />
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
