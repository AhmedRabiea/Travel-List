const Stats = ({ items }) => {
  if (!items.length)
    return (
      <div className="text-center bg-slate-500 text-white font-normal text-sm p-1">
        Start Your Packing List
      </div>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentageItems = Math.round((numPacked / numItems) * 100);

  return (
    <div className="text-center bg-slate-500 text-white font-normal text-sm p-1">
      {percentageItems === 100
        ? "Everything Is Packed Ready To Go"
        : `you have ${numItems} items on your list and you already packed ${numPacked}
      (${percentageItems}%)`}
    </div>
  );
};

export default Stats;
