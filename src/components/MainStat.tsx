import { useEffect, useState } from "react";
import { Stats } from "../utils/enums";
import uniqid from "uniqid";
import { Spec } from "../utils/types";

type Props = {
  selectedSpec: Spec | undefined;
  mainStat: Stats;
  className: string | undefined;
  setMainStat: React.Dispatch<React.SetStateAction<Stats>>;
};

const MainStat: React.FC<Props> = ({
  selectedSpec,
  mainStat,
  className,
  setMainStat,
}) => {
  type st = keyof typeof Stats;
  {
    console.log(Stats);
  }

  useEffect(() => {
    if (selectedSpec) {
      setMainStat(Stats[selectedSpec.mainstat as keyof typeof Stats]);
    }
  }, [selectedSpec]);

  return (
    <div className="flex flex-col max-sm:w-full items-center text-2xl w-1/3">
      <p>MainStat</p>
      <span className="flex">
        &#91;
        <span className="flex gap-3">
          {(Object.keys(Stats) as Array<st>)
            .filter((el, index) => index >= 3)
            .map((key) =>
              selectedSpec ? (
                key === Stats[mainStat] ? (
                  <p className={`font-bold text-orange-500`} key={uniqid()}>
                    {key}
                  </p>
                ) : (
                  <p key={uniqid()}>{key}</p>
                )
              ) : (
                <p key={uniqid()}>{key}</p>
              )
            )}
        </span>
        &#93;
      </span>
    </div>
  );
};

export default MainStat;
