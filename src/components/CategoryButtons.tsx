import React from 'react';
import { Categorie } from "../interfaces/Categorie";

interface CategoryButtonsProps {
  categories: Categorie[];
  handleClick: (name: string) => void;
  catSelected: string;
}

const CategoryButtons: React.FC<CategoryButtonsProps> = ({ categories, handleClick, catSelected }) => {
  return (
    <div className="flex items-center justify-center font-mono leading-relaxed select-none">
      <div className="grid grid-cols-4 gap-4">
        <h1 
          onClick={() => handleClick("All")} 
          className={`px-3 py-1 shadow-lg shadow-gray-500/50 bg-gray-500 text-white rounded-lg text-[15px] cursor-pointer active:scale-[.97] ${catSelected === "All" ? "bg-indigo-500" : ""}`}
        >
          ALL
        </h1>
        {categories.map((category) => (
          <h1 
            onClick={() => handleClick(category.name)} 
            key={category.id} 
            className={`px-3 py-1 shadow-lg shadow-gray-500/50 bg-gray-500 text-white rounded-lg text-[15px] cursor-pointer active:scale-[.97] ${catSelected === category.name ? "bg-indigo-500" : ""}`}
          >
            {category.name}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default CategoryButtons;
