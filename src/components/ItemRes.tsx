import { Item } from "../utils/types";

type Props = {
  itemdata: Item;
};

const ItemRes: React.FC<Props> = ({itemdata}) => {
  return <div className="flex w-11/12">
  <div className="flex w-1/6 relative previewhover">
    <img src={itemdata.image} alt={itemdata.name}/>
    <div className="absolute bg-black w-52 left-full preview flex flex-col text-sm"><p>{itemdata.name}</p>
    <p>{itemdata.preview_item.level.display_string}</p><p>{itemdata.preview_item.inventory_type.name}</p><p>{itemdata.preview_item.item_subclass.name}</p><p></p></div>
    </div>
    <div className="flex flex-col w-5/6 "><p className="text-xs text-center overflow-hidden">{itemdata.name}</p></div>
  </div>;
};

export default ItemRes;
