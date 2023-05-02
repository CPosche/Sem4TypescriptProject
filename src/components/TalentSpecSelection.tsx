import { useEffect, useState } from "react";
import { Class, Spec } from "../utils/types";
import MainStat from "./MainStat";
import { Stats } from "../utils/enums";
import { useLazyQuery } from "@apollo/client/react";
import { getClasses } from "../utils/queries";
type Props = {
  mainStat: Stats;
  setMainStat: React.Dispatch<React.SetStateAction<Stats>>;
};

const TalentSpecSelection: React.FC<Props> = ({ mainStat, setMainStat }) => {
  const [classColor, setClassColor] = useState<string>("");
  const [selectedClass, setSelectedClass] = useState<Class>();
  const [selectedSpec, setSelectedSpec] = useState<Spec>();
  const [getAllClasses, { loading, error, data }] = useLazyQuery(getClasses);

  const handleClasses = () => {
    const classes: Class[] = data.classes;
    setClassColor(classes[0].name.replace(" ", "").toLowerCase());
    setSelectedClass(classes[0]);
    setSelectedSpec(classes[0].specs[0]);
  };

  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const classToSelect = data.classes.find(
      (c: Class) => c.name === e.target.value
    );
    setClassColor(classToSelect?.name.replace(" ", "").toLowerCase());
    setSelectedClass(classToSelect);
    setSelectedSpec(classToSelect?.specs[0]);
  };

  useEffect(() => {
    {
      data ? handleClasses() : getAllClasses();
    }
  }, [data]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="w-full flex max-sm:flex-col max-sm:items-center justify-end text-black">
      <div className="flex gap-3 w-1/3 max-sm:w-full justify-center items-center">
        <div className="flex flex-col items-center">
          <p>Class</p>
          <select
            className={`text-center ${classColor}small w-36 rounded-2xl`}
            onChange={(e) => handleClassChange(e)}
          >
            {data &&
              data.classes?.map((c: Class) => (
                <option
                  className={`text-center ${c.name
                    .replace(" ", "")
                    .toLowerCase()}small`}
                  key={c.name}
                  value={c.name}
                >
                  {c.name}
                </option>
              ))}
          </select>
        </div>
        <div className="flex flex-col items-center">
          <p>Spec</p>
          <select
            className={`text-center ${classColor}small w-36 rounded-2xl`}
            onChange={(e) =>
              setSelectedSpec(
                selectedClass?.specs.find((el) => el.name === e.target.value)
              )
            }
          >
            {selectedClass?.specs.map((s) => (
              <option
                className={`text-center ${classColor
                  .replace(" ", "")
                  .toLowerCase()}small`}
                key={s.name}
                value={s.name}
              >
                {s.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <MainStat
        selectedSpec={selectedSpec}
        mainStat={mainStat}
        classColor={classColor}
        setMainStat={setMainStat}
      />
    </div>
  );
};

export default TalentSpecSelection;
