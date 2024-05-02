import React, { useState, useEffect } from "react";

function FoodTable({ title, data, handleSelect }) {
  const [selectedPortions, setSelectedPortions] = useState({});
  const [selectedItems, setSelectedItems] = useState({});
  const [totalCalories, setTotalCalories] = useState(0);

  const handlePortionSelect = (foodItem, portion) => {
    setSelectedPortions({ ...selectedPortions, [foodItem]: portion });
  };

 const handleItemSelect = (item) => {
  setSelectedItems({ ...selectedItems, [item.Food_items]: !selectedItems[item.Food_items] });
  const selectedPortion = selectedPortions[item.Food_items] || 1;
  handleSelect(item, selectedPortion);
};

  useEffect(() => {
    const calories = data.reduce(
      (acc, item) =>
        selectedItems[item.Food_items]
          ? acc +
            Number(item.Calories) * (selectedPortions[item.Food_items] || 1)
          : acc,
      0,
    );
    setTotalCalories(calories);
  }, [selectedItems, selectedPortions]);

  return (
    <div className="">
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>
      <p className="mt-4 font-semibold">
        Total Calories Selected: {totalCalories}
      </p>
      <div className="no-scrollbar food-table h-[75vh] overflow-scroll">
        <table className="w-full border-collapse ">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-2 py-2">Food Item</th>
              <th className="border border-gray-400 px-2 py-2">Calories</th>
              <th className="border border-gray-400 px-2 py-2">Portion</th>
              <th className="border border-gray-400 px-2 py-2">Select</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="border border-gray-400 px-4 py-2">
                  {item.Food_items}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {item.Calories}
                </td>
                <td className="border border-gray-400 px-2 py-2">
                  <select
                    value={selectedPortions[item.Food_items] || ""}
                    onChange={(e) =>
                      handlePortionSelect(
                        item.Food_items,
                        parseInt(e.target.value),
                      )
                    }
                    className="form-select"
                  >
                    <option value="">Portion</option>
                    {[1, 2, 3].map((portion, idx) => (
                      <option key={idx} value={portion}>
                        {portion}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <input
                    type="checkbox"
                    onChange={() => handleItemSelect(item)}
                    className="form-checkbox h-5 w-5 text-indigo-600"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FoodTable;
