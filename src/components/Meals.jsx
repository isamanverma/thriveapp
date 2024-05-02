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
Mixed Berry Smoothie,1,0,0,1,190,1.0,5.0,1.8,42,33,94,45.0,3.4,0.0,27.0,Overweight
Baked Corn with Peas,1,0,0,1,150,3.0,4.0,0.5,25,18,28,15.0,0.0,0.0,18.0,Healthy
Sweet Potato Curry,1,0,0,1,95,2.7,0.6,0.4,0,3,4,17.1,3.0,0.0,0.0,Healthy
Spaghetti Meatballs,1,0,0,1,181,6.6,8.1,1.92,31,30,177,9.3,1.4,0.0,0.0,Healthy
Asparagus and Carrot Soup,1,0,0,1,70,1.0,1.5,0.3,15,10,18,20.0,0.5,0.0,10.0,Healthy
Wheat Tortilla,1,0,0,1,218,3.7,5.2,1.9,22,397,307,38.0,3.3,0.0,3.6,Normal
Tomato Sambar,1,0,0,1,66,2.7,0.3,0.5,1,6,5,10.3,2.6,0.0,10.0,Healthy
Baingan Bharta Recipe,1,0,0,1,150,3.0,4.0,0.5,25,18,28,15.0,0.0,0.0,18.0,Healthy
Milkshake,1,0,0,0,207,11.0,3.0,0.5,130,73,130,24.0,0.0,0.0,22.0,Overweight
Beetroot Raita,0,1,0,1,200,4.5,2.0,0.6,30,15,35,20.0,0.0,0.0,15.0,Healthy
Vegetable Cheese Dosa,0,1,1,1,217,11.0,6.0,0.6,49,313,137,19.0,2.1,0.0,2.2,Normal
Sorakaya With Senaga Pindi,0,1,1,1,105,6.8,2.3,0.6,18,8,38,12.1,2.7,0.0,0.0,Healthy
Honey Chicken,0,1,1,0,231,9.0,29.0,1.4,18,87,370,13.0,1.3,0.0,6.0,Overweight
Beans Paruppu Usili,0,1,0,1,200,4.5,2.0,0.6,30,15,35,20.0,0.0,0.0,15.0,Healthy
Tri Color Uttapam,0,1,1,1,158,7.0,4.6,1.5,29,233,214,16.4,2.2,0.0,2.0,Normal
Tostadas De Pollo,1,1,0,0,263,13.2,5.3,1.3,16,83,121,14.1,2.0,0.0,1.0,Healthy
Tomato Thokku,0,1,1,1,82,4.3,1.1,0.4,1,1,4,11.3,2.6,0.0,1.0,Healthy
Punjabi Kadhi Pakora,0,1,1,1,123,5.3,4.2,0.9,40,229,123,12.4,0.8,0.0,0.0,Healthy
Barooda,0,1,0,1,200,4.5,2.0,0.6,30,15,35,20.0,0.0,0.0,15.0,Healthy
Banana Bread French Toast,0,0,1,1,200,4.5,2.0,0.6,30,15,35,20.0,0.0,0.0,15.0,Healthy
Badam Kheer,0,0,1,1,150,3.0,3.0,0.5,25,18,28,15.0,0.0,0.0,18.0,Healthy
Popcorn Chicken,0,0,1,0,266,17.8,20.4,2.7,35,434,162,9.2,0.8,0.0,0.0,Healthy
Tomato Yogurt Salad,0,1,1,1,79,3.9,1.5,0.6,4,7,97,11.6,2.5,0.0,3.0,Healthy
Tomato Bruschetta,0,1,1,1,59,2.9,0.4,0.6,2,2,113,4.7,0.5,0.0,2.0,Healthy
Tomato Onion Gojju,0,0,1,1,100,3.6,1.5,0.85,25,230,203,16.8,1.3,0.0,11.2,Normal
Sweet Potato Salad,0,1,1,1,90,4.3,0.9,0.7,5,0,8,9.7,1.6,0.0,0.0,Healthy
Vermicelli Upma,0,1,1,1,107,5.8,1.3,0.0,10,0,111,0.0,0.0,0.0,0.0,Normal
Grilled Chicken,0,1,1,0,335,19.0,33.0,2.5,25,389,553,1.4,0.0,0.0,0.0,Overweight
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
