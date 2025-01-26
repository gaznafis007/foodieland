import Card from "@/components/Card/Card"
import { fetchData } from "@/utils/fetchData"
import Image from "next/image"



export default async function Recipes() {
    const recipes = await fetchData('/recipes/allRecipes')
  return (
    <div className="bg-gradient-to-tr from-primary to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Our Recipes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <Card key={recipe?.title} data={recipe} className={'bg-white'}></Card>
          ))}
        </div>
      </div>
    </div>
  )
}

