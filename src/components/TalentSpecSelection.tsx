import { useEffect, useState } from "react";
import { Class, Spec } from "../utils/types";
import MainStat from "./MainStat";
import { Stats } from "../utils/enums";

type Props = {
  mainStat: Stats;
  setMainStat: React.Dispatch<React.SetStateAction<Stats>>;
};

const TalentSpecSelection: React.FC<Props> = ({ mainStat, setMainStat }) => {
  const [classes, setClasses] = useState<Class[]>();
  const [selectedClass, setSelectedClass] = useState<Class>();
  const [selectedSpec, setSelectedSpec] = useState<Spec>();

  const getClasses = async () => {
    const res = await fetch("http://localhost:3001/classes");
    const data = await res.json();
    setSelectedClass(data[0]);
    setSelectedSpec(data[0].specs[0]);
    console.log(data);
    setClasses(data);
  };

  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const classToSelect = classes?.find(
      (el) => el.id === parseInt(e.target.value)
    );
    setSelectedClass(classToSelect);
    setSelectedSpec(classToSelect?.specs[0]);
  };

  useEffect(() => {
    getClasses();
  }, []);
  return (
    <div className="w-full flex max-sm:flex-col max-sm:items-center justify-end text-black">
      <div className="flex gap-3 w-1/3 max-sm:w-full justify-center items-center">
        <div className="flex flex-col items-center">
          <p>Class</p>
          <select
            className={`text-center w-36 rounded-2xl`}
            onChange={(e) => handleClassChange(e)}
          >
            {classes?.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col items-center">
          <p>Spec</p>
          <select
            className="text-center w-36 rounded-2xl"
            onChange={(e) =>
              setSelectedSpec(
                selectedClass?.specs.find(
                  (el) => el.id === parseInt(e.target.value)
                )
              )
            }
          >
            {selectedClass?.specs.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <MainStat
        selectedSpec={selectedSpec}
        mainStat={mainStat}
        className={selectedClass?.name}
        setMainStat={setMainStat}
      />
    </div>
  );
};

export default TalentSpecSelection;
