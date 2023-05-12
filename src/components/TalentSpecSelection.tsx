import { useEffect, useState } from "react";
import { Class, Spec } from "../utils/types";
import { Stats } from "../utils/enums";
import { useQuery } from "@apollo/client/react";
import { getClasses } from "../utils/queries";
import uniqid from "uniqid";

type Props = {
  mainStat: Stats;
  setMainStat: React.Dispatch<React.SetStateAction<Stats>>;
  selectedClass: Class | undefined;
  setSelectedClass: React.Dispatch<React.SetStateAction<Class | undefined>>;
  selectedSpec: Spec | undefined;
  setSelectedSpec: React.Dispatch<React.SetStateAction<Spec | undefined>>;
};

const TalentSpecSelection: React.FC<Props> = ({
  mainStat,
  setMainStat,
  selectedClass,
  setSelectedClass,
  selectedSpec,
  setSelectedSpec,
}) => {
  const [classColor, setClassColor] = useState<string>("");
  const { loading, error, data } = useQuery(getClasses);

  const handleClasses = () => {
    const classes: Class[] = data.classes;
    setClassColor(classes[0].name.replace(" ", "").toLowerCase());
    setSelectedClass(classes[0]);
    setSelectedSpec(classes[0].specs[0]);
  };

  const handleClassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.split("#")[1] === selectedClass?.name) return;
    const classToSelect = data.classes.find(
      (c: Class) => c.name === e.target.value.split("#")[1]
    );
    setClassColor(classToSelect?.name.replace(" ", "").toLowerCase());
    setSelectedClass(classToSelect);
  };

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error : {error.message}</p>;
  useEffect(() => {
    if (data) handleClasses();
  }, [data]);
  return (
    <div className="w-full flex justify-around text-black">
      <div className="flex w-full justify-around">
        {data &&
          data.classes.map((c: Class) => (
            <div
              key={uniqid()}
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
                      checked={s.id === selectedSpec?.id}
                      className="absolute w-full h-full opacity-0 cursor-pointer"
                      value={`${s.id}#${c.name}`}
                      name="spec"
                      onChange={(e) => {
                        handleClassChange(e);
                        setSelectedSpec(
                          selectedClass?.specs.find(
                            (el) => el.id === e.target.value.split("#")[0]
                          )
                        );
                        // set the main stat to the main stat of the selected spec
                        setMainStat(
                          Stats[
                            selectedClass?.specs.find(
                              (el) => el.id === e.target.value.split("#")[0]
                            )?.mainstat as keyof typeof Stats
                          ]
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
