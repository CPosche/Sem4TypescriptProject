import { useEffect, useState } from "react";
import { Stats } from "../utils/enums";
import DungeonRaidSelect from "./DungeonRaidSelect";
import GearSelect from "./GearSelect";
import Result from "./Result";
import StatPrior from "./StatPrior";
import TalentSpecSelection from "./TalentSpecSelection";
import { CalculatedData, Class, Spec } from "../utils/types";
import { useMutation } from "@apollo/client";
import { getItemsFromStatWeight } from "../utils/queries";

const Content = () => {
  const [mainStat, setMainStat] = useState<Stats>(Stats.Intellect);
  const [selectedClass, setSelectedClass] = useState<Class>();
  const [selectedSpec, setSelectedSpec] = useState<Spec>();
  const [selectedDungeon, setSelectedDungeon] = useState<string[]>([]);
  const [selectedGear, setSelectedGear] = useState<Map<string, boolean>>(
    new Map()
  );
  const [statPriority, setStatPriority] = useState<Map<string, number>>(
    new Map()
  );
  const [result, setResult] = useState<CalculatedData>();
  const [execGetItemsFromStatWeight, { data, loading, error }] = useMutation(
    getItemsFromStatWeight
  );

  const sortMap = (map: Map<string, number>) => {
    const sorted = [...map.entries()].sort((a, b) => a[1] - b[1]);
    return sorted.map((entry) => entry[0]);
  };

  const handleRunCalculations = async () => {
    const calcData = {
      classData: {
        mainStat: Stats[mainStat],
        armorType: selectedClass?.armortype,
      },
      dungeons: selectedDungeon,
      statPriority: sortMap(statPriority),
    };
    console.log("Calculations");
    console.log(calcData);
    await execGetItemsFromStatWeight({ variables: { calcData } });
  };

  useEffect(() => {
    if (data) {
      console.log(data);
      setResult(data);
    }
  }, [data]);
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
          <StatPrior mainStat={mainStat} setStatPriority={setStatPriority} />
          <DungeonRaidSelect
            selectedDungeon={selectedDungeon}
            setSelectedDungeon={setSelectedDungeon}
          />
        </div>
        <div className="flex flex-col w-1/3">
          <GearSelect setSelectedGear={setSelectedGear} />
        </div>
        <div className="flex flex-col w-1/3">
          <Result />
          <div className="pb-5 flex justify-center relative">
            <div>
              <button
                className="bg-green-500 py-1 px-3 border-b-2 border-green-700 hover:border-b-0 rounded-lg"
                onClick={handleRunCalculations}
              >
                Run Calculations
              </button>
            </div>
            <p className="absolute left-2/3"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
