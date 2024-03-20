import { useState } from "react";
import ListItem from "./ListItem";

const PackingList = ({ items, onDeleteItem, onToggleItem, onClearItems }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="flex flex-col justify-between text-[#ffebb3] bg-[#5a3e2b]">
      <div className="py-16 text-center ">
        <ul className="flex gap-10 items-center justify-center text-xl">
          {sortedItems.map((item) => (
            <ListItem
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
      </div>
      <div className="flex gap-5 text-black items-center justify-center mb-10">
        <select
          className="p-3 rounded-lg "
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort By Input</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Packed</option>
        </select>
        <button
          className="border rounded-lg text-black p-2 bg-white"
          onClick={onClearItems}
        >
          Clear Packing List
        </button>
      </div>
    </div>
  );
};

export default PackingList;
