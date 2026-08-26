import React from "react";
import FoodData from "../data/foodData.json";
const Menu = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center overflow-x-hidden relative">
      <div className="grid grid-cols-2 gap-3 justify-items-center w-full px-10">
        {FoodData.products.map((item, id) => (
          <div className="flex flex-col items-center justify-center w-full">
            <img src={item.imageUrl} className="w-175 h-140 object-cover" />
            <p>{item.name.az}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
