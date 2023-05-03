import { useQuery } from "@apollo/client";
import { getDungeons } from "../utils/queries";
import { DungeonSelect } from "../utils/types";

const DungeonRaidSelect = () => {
  const { loading, error, data } = useQuery(getDungeons);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="flex w-full justify-center pb-5">
      <div className="grid grid-cols-4 border-2 border-black grid-rows-2 w-11/12 rounded-xl overflow-hidden">
        {data.dungeons
          .filter((_: never, index: number) => index >= 8)
          .map((dungeon: DungeonSelect) => (
            <div
              key={dungeon.id}
              className="flex flex-col items-center border-2 border-black dungeondisplaydiv"
            >
              <img src={dungeon.image} alt="" className="w-full" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default DungeonRaidSelect;
