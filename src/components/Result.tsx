import { CalculatedData, Item, ItemsPrior } from "../utils/types";
import ItemRes from "./ItemRes";
import uniqid from "uniqid";
import { useEffect, useState } from "react";

type Props = {
  dungeonAndItems: ItemsPrior | undefined;
};



const Result: React.FC<Props> = ({dungeonAndItems}) => {
  return (
    <div className="flex flex-col flex-grow pb-3">
      <div className="flex justify-center">Result</div>
      <div className="flex flex-grow">
        <div className="flex flex-col w-1/2 items-center">
          <div className="flex bg-slate-800 px-3 border-t-4 rounded-t-lg border-r-4 border-l-4 border-black invertround">
            Items
          </div>
          <div className="flex flex-grow flex-col w-4/5 bg-slate-800 rounded-lg border-black border-4 gap-2 items-center pt-2 max-h-80 overflow-hidden overflow-y-scroll">
            {dungeonAndItems?.getItemsFromStatWeight.Items.map((item) => item.map((i: Item) => <ItemRes key={uniqid()} itemdata={i}/>))}
          </div>
        </div>
        <div className="flex flex-col w-1/2 items-center">
          <div className="flex bg-slate-800 px-3 rounded-t-lg border-t-4 border-r-4 border-l-4 border-black invertround">
            Dungeons
          </div>
          <div className="flex flex-grow flex-col w-4/5 bg-slate-800 rounded-lg border-4 border-black">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
