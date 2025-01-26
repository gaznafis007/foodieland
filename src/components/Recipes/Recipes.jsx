import { fetchData } from "@/utils/fetchData";
import React from "react";
import Card from "../Card/Card";

const Recipes = async () => {
  const recipes = await fetchData("/recipes");
  
  const renderGridItems = () => {
    const items = []
    recipes.forEach((recipe, index) => {
      // Add recipe cards
      items.push(<Card key={recipe.title} data={recipe} className={"bg-gradient-to-t from-primary to-white p-4 rounded-2xl md:max-w-full"} />)

      // Insert ad after 5th item
      if (index === 4) {
        items.push(
          <div key="ad" className="overflow-hidden">
            <img
              src="/assets/Ads.png"
              alt="Advertisement"
              className="w-full h-full object-cover"
            />
          </div>,
        )
      }
    })
    return items
  }
  return (
    <section className="p-10 md:p-20">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-6xl font-semibold">Simple and tasty recipes</h2>
        <p className="mt-3 md:mt-6 text-gray-500 w-full md:w-1/2 text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
          possimus porro tempora qui iusto aut explicabo quae exercitationem
          eveniet magni?
        </p>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {renderGridItems()}
        </div>
      </div>
    </section>
  );
};

export default Recipes;
