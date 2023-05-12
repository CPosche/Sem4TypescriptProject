import { useQuery } from "@apollo/client";
import { getDungeons } from "../utils/queries";
import { DungeonSelect } from "../utils/types";
import { useEffect } from "react";

type Props = {
  selectedDungeon: string[] | undefined;
  setSelectedDungeon: React.Dispatch<React.SetStateAction<string[]>>;
};

const DungeonRaidSelect: React.FC<Props> = ({selectedDungeon, setSelectedDungeon}) => {
  const { loading, error, data } = useQuery(getDungeons);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="flex w-full justify-center pb-5">
      <div className="grid grid-cols-4 border-2 border-black grid-rows-2 w-11/12 rounded-xl overflow-hidden">
        {data.dungeons
          .filter((_: never, index: number) => index >= 8)
          .map((dungeon: DungeonSelect) => {
            if(selectedDungeon !== undefined && selectedDungeon?.includes(dungeon.id)) return (
              <div
              key={dungeon.id}
              onClick={() => {
                setSelectedDungeon([...selectedDungeon!.filter((d: string) => d !== dungeon.id)])
              }
              }
              className="flex flex-col relative items-center border-2 border-black dungeondisplaydiv"
            >
              <img src={dungeon.image} alt="" className="w-full" />
              <div className="flex justify-center items-center w-full h-full absolute bg-black bg-opacity-50">
                <p className="text-white text-2xl">Selected</p>
              </div>
            </div>
            )
            else return (
              <div
              key={dungeon.id}
              onClick={() => {
                setSelectedDungeon([...selectedDungeon!, dungeon.id])
              }
              }
              className="flex flex-col items-center border-2 border-black dungeondisplaydiv"
            >
              <img src={dungeon.image} alt="" className="w-full" />
            </div>
            )
          })}
      </div>
    </div>
  );
};

export default DungeonRaidSelect;
