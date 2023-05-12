type Props = {
  setSelectedGear: React.Dispatch<React.SetStateAction<Map<string, boolean>>>;
};

const GearSelect: React.FC<Props> = ({setSelectedGear}) => {
  let gearslots = new Map<string, boolean>([["Head", false], ["Neck", false], ["Shoulder", false], ["Back", false], ["Chest", false], ["Wrist", false], ["Hands", false], ["Waist", false], ["Legs", false], ["Feet", false]]);
  
  const handleGearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    gearslots.set(e.target.name, e.target.checked);
    setSelectedGear(gearslots);
  };
  return <div className="flex flex-col">
    <div className="flex justify-center">GearSelect</div>
    <div className="flex">
      <div className="flex flex-col flex-grow gap-3">
        <div className="flex justify-center gap-2">Head <input type="checkbox" name="Head" onChange={(e) => handleGearChange(e)} /></div>
        <div className="flex justify-center gap-2">Neck <input type="checkbox" name="Neck" onChange={(e) => handleGearChange(e)}/></div>
        <div className="flex justify-center gap-2">Shoulder <input type="checkbox" name="Shoulder" onChange={(e) => handleGearChange(e)}/></div>
        <div className="flex justify-center gap-2">Back <input type="checkbox" name="Back" onChange={(e) => handleGearChange(e)}/></div>
        <div className="flex justify-center gap-2">Chest <input type="checkbox" name="Chest" onChange={(e) => handleGearChange(e)}/></div>
      </div>
      <div className="flex flex-col flex-grow gap-3">
      <div className="flex justify-center gap-2">Wrist <input type="checkbox" name="Wrist" onChange={(e) => handleGearChange(e)}/></div>
        <div className="flex justify-center gap-2">Hands <input type="checkbox" name="Hands" onChange={(e) => handleGearChange(e)}/></div>
        <div className="flex justify-center gap-2">Waist <input type="checkbox" name="Waist" onChange={(e) => handleGearChange(e)}/></div>
        <div className="flex justify-center gap-2">Legs <input type="checkbox" name="Legs" onChange={(e) => handleGearChange(e)}/></div>
        <div className="flex justify-center gap-2">Feet <input type="checkbox" name="Feet" onChange={(e) => handleGearChange(e)}/></div>
      </div>
    </div>
    </div>;
};

export default GearSelect;
