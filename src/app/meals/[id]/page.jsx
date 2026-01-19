import Image from "next/image";
import React from "react";

export const fetchMeal = async (id) => {
  const data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  const mealData = await data.json();
  const singleMeal = mealData.meals[0];
  return singleMeal;
};

export async function generateMetadata({ params }) {
  const { id } = await params;
  const meal = await fetchMeal(id);

  return {
    title: meal?.strMeal || "Meal Details",
    description: meal?.strInstructions?.slice(0, 150),
  };
}

export default async function MealDetails({ params }) {
  const { id } = await params;
  const meal = await fetchMeal(id);

  return (
    <div className="place-items-center mt-10">
      <div className="w-88 border p-5">
        <Image
          src={meal?.strMealThumb}
          alt="Picture of the Meal"
          width={1200}
          height={600}
          className="w-full h-auto"
        />
        <h1>Name: {meal.strMeal}</h1>
        <h1>Category: {meal.strCategory}</h1>
        <p>{meal.strInstructions}</p>
      </div>
    </div>
  );
}
