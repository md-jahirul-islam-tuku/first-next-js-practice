import Link from "next/link";
import MealsSearchInput from "./components/MealsSearchInput";
import Image from "next/image";

export const metadata = {
  title: "All meals",
  description: "All meals are here for checking metadata working good",
};

export default async function MealsPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const search = resolvedSearchParams?.search || "";

  let meals = [];

  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
      { cache: "no-store" },
    );
    const data = await res.json();
    meals = data?.meals || [];
  } catch (error) {
    console.error(error);
  }

  return (
    <div>
      <MealsSearchInput />

      <div className="grid grid-cols-3 gap-4">
        {meals.length === 0 && <p>No meals found</p>}
        {meals.map((meal) => (
          <div key={meal.idMeal} className="border p-5 rounded">
            <Image
              src={meal?.strMealThumb}
              alt="Picture of the Meal"
              width={1200}
              height={600}
              className="w-full h-auto"
              loading="lazy"
            />
            <p>{meal.strMeal}</p>
            <p>{meal.strInstructions.slice(0, 160)}</p>
            <Link href={`/meals/${meal.idMeal}`}>
              <button className="bg-lime-600 px-4 py-2 rounded cursor-pointer">
                Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
