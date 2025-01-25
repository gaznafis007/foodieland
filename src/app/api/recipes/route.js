import { recipes } from "@/data/data"
import { NextResponse } from "next/server"

export async function GET(){
    const normalRecipes = recipes.filter(recipe => !recipe.featured)
    return NextResponse.json(normalRecipes)
}