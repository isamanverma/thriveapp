import React, { useState, useEffect } from "react";
import FoodTable from "./FoodTable";

function Meals() {
  const [foodData, setFoodData] = useState([]);
  const [randomFood, setRandomFood] = useState([]);
  const [caloriesToConsume, setCaloriesToConsume] = useState(2000); // Default value for calories to consume
  const [caloriesSelected, setCaloriesSelected] = useState(0);

  useEffect(() => {
    // Update document title with dynamic text
    document.title = `Calories selected: ${caloriesSelected} | Calories to consume: ${caloriesToConsume}`;
  }, [caloriesSelected, caloriesToConsume]);

  useEffect(() => {
    // Sample CSV data
    const csvData = `
Food_items,Breakfast,Lunch,Dinner,Veg/NonVeg,Calories,Fats,Proteins,Iron,Calcium,Sodium,Potassium,Carbohydrates,Fibre,VitaminD,Sugars,BMI_Range
Baked Spinach,1,0,0,1,150,3.0,4.0,0.5,25,18,28,15.0,0.0,0.0,18.0,Healthy
Baingan Bharta Recipe,1,0,0,1,150,3.0,4.0,0.5,25,18,28,15.0,0.0,0.0,18.0,Healthy
Milkshake,1,0,0,0,207,11.0,3.0,0.5,130,73,130,24.0,0.0,0.0,22.0,Overweight
Honey Chicken,0,1,1,0,231,9.0,29.0,1.4,18,87,370,13.0,1.3,0.0,6.0,Overweight
Beans Paruppu Usili,0,1,0,1,200,4.5,2.0,0.6,30,15,35,20.0,0.0,0.0,15.0,Healthy
Barooda,0,1,0,1,200,4.5,2.0,0.6,30,15,35,20.0,0.0,0.0,15.0,Healthy
Banana Bread French Toast,0,0,1,1,200,4.5,2.0,0.6,30,15,35,20.0,0.0,0.0,15.0,Healthy
Angoori Rasmalai,0,0,1,1,250,7.0,6.0,0.5,100,40,70,30.0,0.0,0.0,30.0,Healthy
`;

    // Parse CSV data
    const rows = csvData.trim().split("\n");
    const headers = rows[0].split(",");
    const data = rows
      .slice(1)
      .map((row) =>
        Object.fromEntries(
          row.split(",").map((value, i) => [headers[i], value]),
        ),
      );
    setFoodData(data);
  }, []);

  const handleSelect = (item) => {
    const isSelected = randomFood.includes(item);
    setRandomFood(
      isSelected ? randomFood.filter((i) => i !== item) : [...randomFood, item],
    );
    updateCaloriesSelected();
  };

  const updateCaloriesSelected = () => {
    const selectedCalories = randomFood.reduce(
      (acc, item) => acc + parseInt(item.Calories),
      0,
    );
    setCaloriesSelected(selectedCalories);
  };

  const calorieStatus = caloriesSelected > caloriesToConsume ? "Over" : "Under";

  return (
    <div className="flex h-screen flex-col">
      <div>
        <div className="text-center text-xl">
          <h2 className="text-3xl font-bold">Meal Planner</h2>
          <div>
            <p><span className="font-bold text-xl">Calories to be consumed:</span> {caloriesToConsume} cal</p>
            <p><span className="font-bold text-xl">Calories selected:</span> {caloriesSelected}</p>
            <p><span className="font-bold text-xl">Status:</span> {calorieStatus}</p>
          </div>
        </div>
        <div className="md:flex md:flex-row md:gap-4 ">
          <div>
            <FoodTable
              title="Breakfast"
              data={foodData.filter((item) => item.Breakfast === "1")}
              handleSelect={handleSelect}
            />
          </div>
          <div>
            <FoodTable
              title="Lunch"
              data={foodData.filter((item) => item.Lunch === "1")}
              handleSelect={handleSelect}
            />
          </div>
          <div>
            <FoodTable
              title="Dinner"
              data={foodData.filter((item) => item.Dinner === "1")}
              handleSelect={handleSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meals;
