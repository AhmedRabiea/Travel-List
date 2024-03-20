import { IoIosCloseCircle } from "react-icons/io";

const ListItem = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li className="flex gap-3 items-center justify-center">
      <input
        type="checkbox"
        onChange={() => {
          onToggleItem(item.id);
        }}
      />
      <span className={item.packed && "line-through"}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>
        <IoIosCloseCircle />
      </button>
    </li>
  );
};

export default ListItem;
