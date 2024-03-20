import { useState } from "react";

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit() {
    if (description) {
      const newItem = { description, quantity, packed: false, id: Date.now() };
      onAddItems(newItem);
      setDescription("");
      setQuantity(1);
    }
  }

  return (
    <div className="p-10 bg-[#e5771f] flex items-center justify-center gap-3">
      <h3 className="text-4xl mr-6">What Do You Need For Your Trip ?</h3>
      <select
        name="quantity"
        id="1"
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 50 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <label htmlFor="items" className="block">
        <input
          type="text"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Enter Your Item"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button
        className="bg-slate-800 hover:bg-slate-600 focus:outline-none focus:ring focus:ring-violet-300 py-2 px-6 rounded-full text-white"
        onClick={handleSubmit}
      >
        ADD
      </button>
    </div>
  );
};

export default Form;
