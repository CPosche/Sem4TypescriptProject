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
  const [selectedDungeon, setSelectedDungeon] = useState<string[]>([]);
  const [selectedGear, setSelectedGear] = useState<Map<string, boolean>>(new Map());
  const [statPrior, setStatPrior] = useState<Map<string, number>>(new Map());
  const [result, setResult] = useState<string>("");

  const handleRunCalculations = () => {
    const data = {
      mainStat,
      selectedClass,
      selectedSpec,
      selectedDungeon,
      selectedGear,
    };
    console.log("Calculations");
    console.log(data);
    setResult("Calculations");
  };
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
          <DungeonRaidSelect selectedDungeon={selectedDungeon} setSelectedDungeon={setSelectedDungeon} />
        </div>
        <div className="flex flex-col w-1/3">
          <GearSelect setSelectedGear={setSelectedGear} />
        </div>
        <div className="flex flex-col w-1/3">
          <Result />
          <div className="pb-5 flex flex-col items-center">
            <div>
          <button className="bg-green-500 py-1 px-3 border-b-2 border-green-700 hover:border-b-0 rounded-lg" onClick={handleRunCalculations}>Run Calculations</button>
          </div>
          <p>{result && result}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
