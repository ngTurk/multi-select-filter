"use client";

import { useEffect, useState } from "react";

import SearchField from "./search-field";
import Checkbox from "./checkbox";

const MultiSelect = ({
  categories: categoriesPrimitive,
}: {
  categories: string[];
}) => {
  const [categories, setCategories] = useState(categoriesPrimitive);
  const [searchValue, setSearchValue] = useState("");
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const selectedCat = localStorage.getItem("selectedCategories");
      setSelectedCategories(JSON.parse(selectedCat as string));
    }
  }, []);

  useEffect(() => {
    if (!searchValue) {
      setCategories(categoriesPrimitive);
      return;
    }

    // Filter based on searchValue
    const filteredCategories = categoriesPrimitive.filter((category) =>
      category.toLowerCase().includes(searchValue.toLowerCase())
    );

    setCategories(filteredCategories);
  }, [categoriesPrimitive, searchValue]);

  const handleCheckboxChange = (category: string, isChecked: boolean) => {
    if (isChecked) {
      setSelectedCategories((prev) => {
        const updatedCategories = [...prev, category];
        localStorage.setItem(
          "selectedCategories",
          JSON.stringify(updatedCategories)
        );
        return updatedCategories;
      });
    } else {
      setSelectedCategories((prev) => {
        const updatedCategories = prev.filter((cat) => cat !== category);
        localStorage.setItem(
          "selectedCategories",
          JSON.stringify(updatedCategories)
        );
        return updatedCategories;
      });
    }

    localStorage.setItem(
      "selectedCategories",
      JSON.stringify(selectedCategories)
    );
  };

  return (
    <div className="max-w-lg mx-auto flex items-center justify-center h-screen">
      <div className="w-full flex flex-col gap-5 bg-[#f6f6f6] p-4 rounded-md">
        <h5>Kategoriler</h5>
        <div className="flex flex-wrap gap-2 mb-3">
          {!isAllChecked
            ? selectedCategories.map((cat, i) => (
                <span
                  key={`${cat}-${i}`}
                  className="bg-blue-200 text-blue-800 px-2 py-1 rounded"
                >
                  {cat}
                </span>
              ))
            : null}
        </div>
        <SearchField
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
        <div className="overflow-y-scroll h-72">
          <Checkbox
            label="Tümünü Seç"
            isChecked={isAllChecked}
            onCheckboxChange={(category, isChecked) =>
              setIsAllChecked(isChecked)
            }
          />
          {categories.map((category, i) => (
            <Checkbox
              onCheckboxChange={handleCheckboxChange}
              isChecked={selectedCategories.includes(category) || isAllChecked}
              key={`${category}-${i}`}
              label={category}
            />
          ))}
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
          Ara
        </button>
      </div>
    </div>
  );
};

export default MultiSelect;
