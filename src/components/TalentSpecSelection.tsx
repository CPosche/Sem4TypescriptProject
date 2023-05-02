import { useEffect, useState } from "react";
import { Class, Spec } from "../utils/types";
import MainStat from "./MainStat";
import { Stats } from "../utils/enums";
import { useLazyQuery } from "@apollo/client/react";
import { getClasses } from "../utils/queries";
import uniqid from "uniqid";

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

  const handleClassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const classToSelect = data.classes.find(
      (c: Class) => c.name === e.target.value.split("#")[1]
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
    <div className="w-full flex justify-around text-black">
      <div className="flex w-full justify-around">
        {data &&
          data.classes.map((c: Class) => (
            <div key={uniqid()}
              className={`py-2 flex w-1/15 items-center flex-col ${c.name
                .replace(" ", "")
                .toLowerCase()}small h-full rounded-b-xl border-2 border-t-0 border-black classselectdiv`}
            >
              <img
                src={`../../src/assets/images/${c.name
                  .replace(" ", "")
                  .toLowerCase()}.png`}
                alt={c.name}
                className="w-2/5"
              />
              <div className="flex flex-col relative">
                {c.specs.map((s: Spec) => (
                  <div key={uniqid()} className="flex justify-center">
                    <input
                      type="radio"
                      className="absolute w-full h-full opacity-0 cursor-pointer"
                      value={`${s.name}#${c.name}`}
                      name="spec"
                      onChange={(e) => {
                        handleClassChange(e);
                        setSelectedSpec(
                          selectedClass?.specs.find(
                            (el) => el.name === e.target.value.split("#")[0]
                          )
                        );
                      }}
                    />{" "}
                    <span className="text-xs specp">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TalentSpecSelection;
